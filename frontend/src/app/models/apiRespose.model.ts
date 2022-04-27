import { Device } from './device.model';
import { Category } from './category.model';
export interface apiResponse{
    statusCode:number,
    data?:Array<Category> | undefined
}