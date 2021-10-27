export default function Patrocinios(){
    return(
        <div>
            <div className="flex items-center flex-col md:flex-row">
              <div> 
                <h1 className="text-3xl pb-5" id="patrocinios">
                    Patrocínios e parcerias
                </h1>
                <p className="text-md md:text-lg">
                A nossa organização possui o apoio de patrocinadores que 
                ajudam a equipe a evoluir e se manter atualizada na inovadora 
                tecnologia que é o drone autônomo. Sem eles, nossa equipe 
                não teria a dimensão que tem hoje, ajudando com investimentos, 
                divulgações e apoios em geral. Somos gratos! 
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row">
                <img src="/images/parcerias_e_patrocinios.png" alt="patrocinadores" />
            </div>
        </div>

    );
}