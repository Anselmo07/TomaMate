import type { User } from "../types/user";

import { recordDay } from "../game/engines/recordDay";

export interface RecordTodayInput {

    drankMate:boolean;

    thermos:number;

}

export function registerToday(

    user:User,

    data:RecordTodayInput

):User{

    return recordDay(

        user,

        {

            ...data,

            date:new Date()

                .toISOString()

                .split("T")[0]

        }

    );

}