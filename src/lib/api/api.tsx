import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const PROFILE = gql`
  query {
    myProfile {
      name
      avatar
    }
  }
`;

export const PRODUCTS = gql`
  query {
    products {
      id
      title
      price
      images
    }
  }
`;

export const USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;
