import { Request, Response } from 'express';

class CreateUserController {
    handle(request: Request, response: Response) {
        return response.json([
            {
                name: 'João'
            },
            {
                name: 'Maria'
            },
            {
                name: 'José'
            }
        ]);
    }
}

export { CreateUserController }