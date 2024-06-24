import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lembretes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Lembretes</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>Conta</th>
              <th style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>Valor</th>
              <th style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>Vencimento</th>
              <th style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>Situação</th>
              <th style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>Água</td>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>R$ 200</td>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>10/05/2024</td>
              <td style={{ padding: '20px', border: '1px solid #ddd', color: 'red' }}>Vencida</td>
              <td style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>Energia</td>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>R$ 200</td>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>10/05/2024</td>
              <td style={{ padding: '20px', border: '1px solid #ddd', color: 'green' }}>Paga</td>
              <td style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>Telefone</td>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>R$ 200</td>
              <td style={{ padding: '20px', border: '1px solid #ddd' }}>10/05/2024</td>
              <td style={{ padding: '20px', border: '1px solid #ddd', color: 'orange' }}>A pagar</td>
              <td style={{ padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
