import React from "react";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import backgroundcinza from "../../asserts/backgroundcinza.png";
import logocampanhafooter from "../../asserts/logocampanhafooter.svg";
import soquem from "../../asserts/soquem.png";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundcinza})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={2} columns={12}>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            alignItems: "center"
          }}
        >
          <Item
            style={{
              paddingLeft: "50px"
            }}
          >
            {/* <img src={soquem} alt="logo-campanha" /> */}
            <h2
              style={{
                color: "black",
                fontSize: "20px",
                display: "flex",
                width: "100%",
                fontFamily: "fonteBlack"
              }}
            >
              SÓ QUEM VENDE CURTE AS EXPERIÊNCIAS MAIS DIFERENTONAS!
            </h2>
            <p
              style={{
                color: "grey",
                fontSize: "10px",
                display: "flex",
                width: "100%",
                paddingRight: "0",
                paddingBlockEnd: "0",
                textAlign: "justify",
                textJustify: "inter-word"

              }}
            >
              *Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center e para o Setor Público não serão válidas. A apuração do mês de agosto será retroativa. Imagens meramente ilustrativas. Realizamos todos os esforços para garantir a precisão das informações, mas não somos responsáveis por qualquer conteúdo editorial, fotográfico ou por erros tipográficos. Todas as imagens são apenas para fins ilustrativos. Para especificações completas de produto, informações de serviços e garantias, visite www.umbrindenaeuropa.com/saiba. Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros. Outros nomes de empresas, produtos e serviços podem ser marcas registradas ou marcas de serviços de terceiros. 2020. Todos os direitos reservados.
            </p>
            {/* <Typography variant="p" color="inherit"
            >*Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center e para o Setor Público não serão válidas. A apuração do mês de agosto será retroativa. Imagens meramente ilustrativas. Realizamos todos os esforços para garantir a precisão das informações, mas não somos responsáveis por qualquer conteúdo editorial, fotográfico ou por erros tipográficos. Todas as imagens são apenas para fins ilustrativos. Para especificações completas de produto, informações de serviços e garantias, visite www.umbrindenaeuropa.com/saiba. Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros. Outros nomes de empresas, produtos e serviços podem ser marcas registradas ou marcas de serviços de terceiros. 2020. Todos os direitos reservados.
</Typography> */}
          </Item>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ display: "flex", justifyContent: "center", padding: "50px" }}
        >
          <Item>
            <img src={logocampanhafooter} alt="logo-campanha" />
          </Item>
        </Grid>
      </Grid>
      <div
        style={{
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "orange",
          color: "white",
          textAlign: "center",
        }}
      >
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
