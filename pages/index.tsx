import Layout from "../components/Layout";
import Link from "next/link";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const MartsQuery = gql`
  query getMarts(
    $where: MartWhereInput
    $orderBy: MartOrderByInput
    $take: Int
    $skip: Int
  ) {
    marts(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      name
      openTime
      closeTime
      dayOffRule {
        dayRule
        weekRule
      }
    }
  }
`;

const Mart = ({ mart }) => (
  <Link href="/store/[id]" as={`/store/${mart.id}`}>
    <a>
      <h2>{mart.name}</h2>
      <span>Open: {mart.openTime}</span>
      <span>Close: {mart.closeTime}</span>
      <span>
        휴일:{" "}
        {mart.dayOffRule.map((day) => `[${day.dayRule}, ${day.weekRule}]`)}
      </span>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
);

const MartList = () => {
  const { loading, error, data } = useQuery(MartsQuery, {
    fetchPolicy: "cache-and-network",
    variables: {
      take: 10,
    },
  });

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout>
      <div className="page">
        <h1>MART DayOff</h1>
        <main>
          {data.marts.map((mart) => (
            <div key={mart.id} className="post">
              <Mart mart={mart} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default MartList;
