import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { addTestUser, removeTestUser, removeAllTestContact, addTestContact, getTestContact } from "./test-util.js";

describe('POST /api/contacts', () => {
    beforeEach(async () => {
        await addTestUser();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    it('should can create new contact', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set('Authorization', 'test')
            .send({
                first_name: "test",
                last_name: "test",
                email: "test@gmail.com",
                phone: "0809000000"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.first_name).toBe("test");
        expect(result.body.data.last_name).toBe("test");
        expect(result.body.data.email).toBe("test@gmail.com");
        expect(result.body.data.phone).toBe("0809000000");
    });

    it('should reject if request is not valid', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set('Authorization', 'test')
            .send({
                first_name: "",
                last_name: "test",
                email: "test",
                phone: "0809000000783747387599834878375368477385837848"
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});

describe('GET /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await addTestUser();
        await addTestContact();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    it('should can get contact', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .get('/api/contacts/' + testContact.id)
            .set('Authorization', 'test')

        logger.warn(result);

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe(testContact.first_name);
        expect(result.body.data.last_name).toBe(testContact.last_name);
        expect(result.body.data.email).toBe(testContact.email);
        expect(result.body.data.phone).toBe(testContact.phone);
    });

    it('should return 404 if contact id is not found', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .get("/api/contacts/" + (testContact.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
});

describe('PUT /api/contacts/:contactId', () => {
    beforeEach(async () => {
        await addTestUser();
        await addTestContact();
    });

    afterEach(async () => {
        await removeAllTestContact();
        await removeTestUser();
    });

    it('should can update existing contact', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .put('/api/contacts/' + testContact.id)
            .set('Authorization', 'test')
            .send({
                first_name: "Among",
                last_name: "Bagas",
                email: "amongbagas@gmail.com",
                phone: "08123456789"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe("Among");
        expect(result.body.data.last_name).toBe("Bagas");
        expect(result.body.data.email).toBe("amongbagas@gmail.com");
        expect(result.body.data.phone).toBe("08123456789");
    });

    it('should reject if contact is not found', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .put('/api/contacts/' + (testContact.id + 1))
            .set('Authorization', 'test')
            .send({
                first_name: "Among",
                last_name: "Bagas",
                email: "amongbagas@gmail.com",
                phone: "08123456789"
            });

        logger.warn(result);

        expect(result.status).toBe(404);
        expect(result.body.errors).toBeDefined();
    });
})