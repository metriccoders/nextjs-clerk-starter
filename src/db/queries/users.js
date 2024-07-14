import {db} from "@/db";
import {notFound} from "next/navigation";

export const fetchUsers = async () => {
    return await db.user.findMany()
} 

export const fetchUserById = async (id) => {
    const user = await db.user.findFirst({
        where: {
            id
        }
    })

    if(!user){
        notFound();
    }
    return user
}