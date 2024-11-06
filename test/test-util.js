import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    })
}

export const addTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}

export const removeAllTestContact = async () => {
    return prismaClient.contact.deleteMany({
        where: {
            username: "test"
        }
    });
}

export const addTestContact = async () => {
    return prismaClient.contact.create({
        data: {
            username: "test",
            first_name: "test",
            last_name: "test",
            email: "test@gmail.com",
            phone: "08090000000"
        }
    });
}

export const getTestContact = async () => {
    return prismaClient.contact.findFirst({
        where: {
            username: "test"
        }
    });
}