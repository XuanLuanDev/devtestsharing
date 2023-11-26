import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'unicodeFormat',
})
export class UnicodeFormatPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return value.replace(/\\u[\dA-Fa-f]{4}/g, (match: string) => {
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
        });;
    }
}