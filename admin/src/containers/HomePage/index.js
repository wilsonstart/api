/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import PageTitle from "../../components/PageTitle";

import {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Separator,
} from "./components";
import SocialLink from "./SocialLink";

const HomePage = () => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Bem vindo a API da Escola START!</h2>
              <P>
                Ao lado você pode cadastrar os novos cursos, instrutores e acompanhar as compras!
              </P>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <p>Em breve, teremos nossos dashboards</p>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
