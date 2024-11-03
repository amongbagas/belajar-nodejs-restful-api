import supertest from "supertest";
import {web} from "../src/application/web.js";
import {prismaClient} from "../src/application/database.js";
import {logger} from "../src/application/logging.js";

describe('POST /api/users', () => {

    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                username: "amongbagas"
            }
        });
    });

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "amongbagas",
                password: "rahasia",
                name: "Among Bagas Punarbawa Purnama"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("amongbagas");
        expect(result.body.data.name).toBe("Among Bagas Punarbawa Purnama");
        expect(result.body.data.password).toBeUndefined();

    });

    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "",
                password: "",
                name: ""
            });

        logger.info(result.body);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();

    });

    it('should reject if username is already registered!', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: "amongbagas",
                password: "rahasia",
                name: "Among Bagas Punarbawa Purnama"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("amongbagas");
        expect(result.body.data.name).toBe("Among Bagas Punarbawa Purnama");
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: "amongbagas",
                password: "rahasia",
                name: "Among Bagas Punarbawa Purnama"
            });

        logger.info(result.body);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();

    });
});
