import React, {useEffect, useState} from 'react';


export const Resources: React.FC = () => {

  const [hostname, setHostname] = useState<string>('');

  useEffect(() => {
    console.log('%cResources.tsx::71', 'color: #f00; font-size: 1rem', 'Render Resources.tsx');
    setHostname(window.location.hostname);
  }, []);


  return (
    <table>
      <tbody>
        <tr>
          <th>Graphql exemples</th>
          <td>src/api/graphql.ts</td>
        </tr>
        <tr>
          <th>Posts</th>
          <td>src/hooks/usePosts.ts</td>
        </tr>
        <tr>
          <th>Test GraphQL</th>
          <td><a
            href={`https://${hostname}/api/graphql`}
            target="_blank"
            rel="noreferrer"
          >https://{hostname}/api/graphql</a></td>
        </tr>
      </tbody>
    </table>
  );
};
