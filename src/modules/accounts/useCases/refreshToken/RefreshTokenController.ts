import { Response, Request } from "express";
import { container } from "tsyringe";
import { RefreshTokenUserCase } from "./RefreshTokenUserCase";

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.header["x-access-token"] ||
      request.query.token;

    const refreshTokenUserCase = container.resolve(RefreshTokenUserCase);

    const refresh_token = await refreshTokenUserCase.execute(token);

    return response.json(refresh_token);
  }
}

export { RefreshTokenController };
