import { v4 as Guid } from 'uuid';

export function newGuid(): string {
    return Guid();
}
