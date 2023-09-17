export default function getExpiresIn(minutes: number): number {
  const currentTime = Date.now();
  const expiresIn = currentTime + minutes * 60 * 1000;
  return expiresIn;
}
