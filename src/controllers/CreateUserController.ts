import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    async handle(request: Request, response: Response) {
        const createUserService = new CreateUserService();

        const { name, email } = request.body;
        const id = uuid();

        if (name.length === 0) {
            return response.status(400).json({ message: 'Preencha todos os campos' });
        }

        const user = await createUserService.execute({
            id,
            name,
            email
        })

        return response.status(201).json(user);
    }
}

export { CreateUserController }