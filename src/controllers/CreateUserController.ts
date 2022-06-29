import { Request, Response } from 'express';

class CreateUserController {
    handle(request: Request, response: Response) {
        const { name } = request.body;

        return response.json({ message: `User ${name} created` });
    }
}

export { CreateUserController }