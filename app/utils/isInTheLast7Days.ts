const isInLast7Days = (iso: string) => Date.now() - new Date(iso).getTime() <= 7 * 24 * 60 * 60 * 1000;
export default isInLast7Days