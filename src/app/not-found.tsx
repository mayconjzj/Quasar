export default function NotFound() {
  const curiosidades = [
    'Você sabia que os corações dos guepardos são especialmente adaptados para suportar altas velocidades? Eles possuem corações grandes e pulmões enormes para fornecer oxigênio suficiente durante as corridas.',
    "Você sabia que existe uma teoria na física chamada 'Universo Fotônico'? Ela sugere que se a velocidade da luz e outras constantes fundamentais do universo fossem diferentes, o universo poderia ser um gigantesco mar de luz sem matéria sólida.",
    'Você sabia que alguns indivíduos de árvores, como o pinheiro Bristlecone, podem viver por milhares de anos? Alguns exemplares dessas árvores têm mais de 4.000 anos de idade, tornando-os mais antigos que muitas civilizações humanas.',
    "Você sabia que os tardígrados, conhecidos como 'Ursinhos D'Água', podem sobreviver a ambientes extremos, incluindo o vácuo do espaço? Eles podem entrar em um estado de criptobiose, onde desidratam e parecem estar mortos, mas podem ser reanimados quando reintroduzidos à água.",
    'Você sabia que os engenheiros frequentemente se inspiram na natureza para projetar novas tecnologias? Por exemplo, o design do trem-bala japonês Shinkansen foi inspirado na forma aerodinâmica do bico do martim-pescador, enquanto o Velcro foi inventado após um engenheiro se inspirar nos pequenos ganchos que grudavam em seu cachorro após uma caminhada na floresta.',
    'Você sabia que quando olhamos para o céu noturno, estamos vendo estrelas não como elas são agora, mas como eram quando a luz que estamos vendo foi emitida? Isso ocorre devido ao tempo que a luz leva para viajar pelo espaço, tornando a observação das estrelas essencialmente uma visão do passado distante.'
  ];

  return (
    <main className="pt-[70px] md:px-8 px-2 h-[calc(100vh-70px)] flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-center">404</h1>
      <p className="text-center text-muted-foreground">
        Página não encontrada!
      </p>
      <p className="text-center text-muted-foreground max-w-[500px] mt-2">
        {curiosidades[Math.floor(Math.random() * curiosidades.length)]}
      </p>
    </main>
  );
}
