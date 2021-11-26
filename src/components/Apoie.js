export default function Apoie() {
    return (
        <div className="flex items-center flex-col md:flex-row">
            <div>
                <h1 className="text-3xl pb-5 font-semibold" id="apoia-se">Apoie-nos!</h1>
                <p className="text-md md:text-lg md:mb-8">
                    Todo apoio, principalmente da comunidade geral, é bem-vindo. Esse apoio pode ser feito com divulgações, patrocínios, doações de materiais e auxílio financeiro.  Caso queira, você pode utilizar o QR Code a seguir para realizar um pix como doação a equipe!
                </p>
            </div>
            <div className="w-1/3 my-5 md:pt-20">
                <img src="/images/qrcode.png" alt="qrcode para doação" />
            </div>
      </div>
    );
}