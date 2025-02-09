export default function CustomError({ statusCode }: { statusCode?: number }) {
  return (
      <div>
          <h1>❌ Erreur {statusCode || 500}</h1>
          <p>Oups ! Quelque chose s'est mal passé.</p>
      </div>
  );
}

CustomError.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
