export default function QuemSomos() {
  return (
    <div>
      <div className="flex items-center flex-col md:flex-row">
        <div>
          <h1 className="text-3xl pb-5" id="quem-somos">
            Quem Somos
          </h1>
          <p className="text-md md:text-lg mb-12">
            A Skyrats surgiu em 2017 na Escola Politécnica de São Paulo, com
            orientação do professor Marcelo Zuffo e participação inicial de 15
            membros. Atualmente somos uma equipe composta por mais de 70 membros
            e temos como principal objetivo o desenvolvimento de drones
            autônomos com um foco especial em competições, Além disso,
            desenvolvemos estratégias tecnológicas aplicadas a diversos
            contextos cotidianos e uma forte capacitação dos nossos membros.
          </p>
        </div>

        <div>
          <img src="/images/equipe_fotos.png" alt="fotos da equipe" />
        </div>
      </div>
    </div>
  );
}
