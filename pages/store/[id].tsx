import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const MartQuery = gql`
  query Mart($where: MartWhereUniqueInput!) {
    mart(where: $where) {
      id
      brand
      name
      tel
      address
      openTime
      closeTime
      dayOffRuleId
      dayOffRule {
        dayRule
        weekRule
      }
      measuredDayOff {
        targetMonth
        targetDay
      }
      geolocation {
        latitude
        longitude
      }
    }
  }
`;

function Mart() {
  const id = useRouter().query.id;
  const { loading, error, data } = useQuery(MartQuery, {
    variables: { where: { id } },
  });

  if (loading) {
    console.log("loading");
    return <div>Loading ...</div>;
  }
  if (error) {
    console.log("error");
    return <div>Error: {error.message}</div>;
  }

  console.log(`response`, data);

  return (
    <Layout>
      <div>
        <h2>{data.mart.name}</h2>
        <p>tel {data.mart.tel}</p>
        {/* <p>{data.post.content}</p>
        {!data.post.published && (
          <button
            onClick={async (e) => {
              await publish({
                variables: {
                  postId,
                },
              });
              Router.push("/");
            }}
          >
            Publish
          </button>
        )}
        <button
          onClick={async (e) => {
            await deletePost({
              variables: {
                postId,
              },
            });
            Router.push("/");
          }}
        >
          Delete
        </button> */}
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
}

export default Mart;
