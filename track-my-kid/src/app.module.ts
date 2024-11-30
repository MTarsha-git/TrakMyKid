import {Module} from '@nestjs/common'
import {UsersModule} from './users/users.module'
import { RolesModule } from './roles/roles.module';
import { DatabaseModule } from './database/database.module';
@Module({
    imports : [UsersModule,RolesModule, DatabaseModule],
})
export class AppModule{}