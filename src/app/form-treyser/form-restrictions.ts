export class FormRestrictions {
    title: string;
    message: string;
    okButtonText: string;
    limits: Limits;
    constructor(
        title: string,
        limits: Limits,
        okButtonText: string= "I understand this"
        ) {
            this.limits = limits;
            this.title = `Consider ${title} validations`;
            this.message = `Min: ${limits.min} characters\nMax: ${limits.max} characters\nOnly alphanumeric characters`;
            this.okButtonText = okButtonText;
    }

    get min() {
        return this.limits.min;
    }
    get max() {
        return this.limits.max;
    }
}

export interface Limits {
    min: number;
    max: number;
}
