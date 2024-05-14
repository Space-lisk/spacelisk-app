export function generateRandomString(length: number = 30): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function addSecondsToDate(seconds: number): Date {
    const currentDate = new Date();
    currentDate.setSeconds(currentDate.getSeconds() + seconds);
    return currentDate;
  }