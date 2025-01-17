"use client";

import axios from "axios";

export default function RegisterConfirmation({
  params,
}: {
  params: { userIdentity: string };
}) {
  const handleLinkClick = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Impede que o link redirecione a página
    try {
      debugger;
      console.log("API URL:", process.env.NEXT_PUBLIC_API_LOGIN_URI);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_LOGIN_URI}/ConfirmUserRegistration`,
        {
          emailHash: params.userIdentity, // Passando o parâmetro da rota no corpo da requisição
        }
      );
      console.log("Resposta da requisição:", response.data);
    } catch (error) {
      console.error("Erro ao enviar a requisição:", error);
    }
  };

  return (
    <div>
      <h1>Register confirmation {params.userIdentity}</h1>
      <a href="#" onClick={handleLinkClick}>
        Enviar Requisição
      </a>
    </div>
  );
}
