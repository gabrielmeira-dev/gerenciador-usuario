import { Routes } from "@angular/router";
import { Edit } from "./edit";
import { getByIdResolver } from "./resolvers/get-by-id-resolver";


export const routes: Routes = [
    {
        path: '',
        resolve: {
            user: getByIdResolver
        },
        component: Edit
    }
]