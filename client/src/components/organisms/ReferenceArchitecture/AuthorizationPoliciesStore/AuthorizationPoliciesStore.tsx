import { PropsWithChildren } from "react";
import Styles from "./AuthorizationPoliciesStore.module.scss";
import { Card } from "../../../atoms/Card/Card";

type AuthorizationPoliciesStoreProps = {};

export const AuthorizationPoliciesStore =
  ({}: PropsWithChildren<AuthorizationPoliciesStoreProps>) => {
    return (
      <Card className={Styles.AuthorizationPoliciesStore}>
        <h3>
          It extends the Identity Management component of the existing data
          platform/smart city platform to support the authentication process of
          a data space participant in the access to a resource of the platform:
        </h3>
        <p>
          1{")"} is the party who is trying to access the resource really who it
          says it is,
        </p>
        <p>
          2{")"} does this party have granted access to the resource according
          to active access policies.
        </p>
        <p>
          Technically, DS4SSCC recommends that the Authorisation Policies Store
          maps with XACML and supports the ABAC and RBAC access controls. It can
          be embedded into the Identity Management solutions (e.g. Keyrock,
          KeyCloak) or as a standalone component (e.g. iShare Authorization
          Registry). The existing Identity Management solutions in data
          platforms must evolve towards a decentralized approach.
        </p>
      </Card>
    );
  };
