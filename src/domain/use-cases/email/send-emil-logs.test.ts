import { LogEntity } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import { SendEmailLogs } from "./send-email-logs";

describe("send email logs", () => {
  const mockEmailService = {
    sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true),
  };

  const mockLogRepository: LogRepository = {
    getLogs: jest.fn(),
    saveLog: jest.fn(),
  };

  const sendEmailLogs = new SendEmailLogs(
    mockEmailService as any,
    mockLogRepository
  );

  const email: string = "jbecerrap95@gmail.com";

  //

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should call sendEmail and saveLog with correct values", async () => {
    const result = await sendEmailLogs.execute(email);

    expect(result).toBe(true);
    expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(
      1
    );
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith(
      expect.any(LogEntity)
    );
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
      level: "low",
      message: `Email sent to ${email}`,
      origin: "send-email-logs.ts",
      createdAt: expect.any(Date),
    });
  });

  test("Sholud log in case of error", async () => {
    mockEmailService.sendEmailWithFileSystemLogs.mockReturnValue(false);

    const result = await sendEmailLogs.execute(email);

    expect(result).toBe(false);
    expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(
      1
    );
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith(
      expect.any(LogEntity)
    );
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
      level: "higth",
      message: `Error: Email not sent`,
      origin: "send-email-logs.ts",
      createdAt: expect.any(Date),
    });
  });
});
