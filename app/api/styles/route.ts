import styles from '../data/styles.json';

export async function GET() {
  return Response.json(styles);
}
