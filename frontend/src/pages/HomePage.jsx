import Scanner from "../components/Scanner";

export default function HomePage() {
  useEffect(() => {
    sql.query('test');
  }, []);
  return (
    <body>
      <Scanner />
    </body>
  );
}
