import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-70 shadow-lg p-6 rounded-[5%] flex-col m-44 shadow-lg shadow-white">
      <div className='flex justify-center pb-12'>
        <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-600 to-red-600'>
          Survivors Bunker
        </h1>
      </div>
      <div className='pb-12'>
        <Image
          src="/assets/main-image.svg"
          width={1080}
          height={500}
          alt="Main Picture"
          className='rounded-3xl'
        />
      </div>
      <div className='m-16'>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-semibold text-6xl text-justify'>
          Em meio às cinzas de um mundo devorado pela epidemia <Link className='text-yellow-200' href="/monsters">zumbi</Link>, encontro-me como um <Link className='text-yellow-200' href="/monsters">sobrevivente</Link>, testemunha da Terra Devastada. Nesse cenário pós-apocalíptico, onde a linha entre a vida e a morte se desfaz a cada esquina, o RPG Terra Devastada surge como uma janela para a sobrevivência, uma narrativa que desafia minha coragem e resiliência diante de horrores inimagináveis. A magia do jogo se revela na colaboração entre os participantes, na construção de mundos imaginários e na exploração de narrativas épicas, tornando-o uma expressão extraordinária de criatividade e socialização.<br />
          <br />
          À medida que me aventuro nesse terreno hostil, descubro não apenas os desafios tangíveis, mas também a essência única do RPG Terra Devastada. Este jogo, guiado pelo Mestre do Jogo, é mais do que uma mera distração; é um reflexo distorcido de nossa realidade, onde cada escolha pode significar a diferença entre a vida e a morte. Cada sessão desvenda novos horrores, desafiando nossa capacidade de improvisação, estratégia e tomada de decisões cruciais.<br />
          <br />
          Contudo, em meio a esse desespero, encontro um abrigo inesperado, não nas sombras, mas em um <Link className='text-yellow-200' href="/monsters">bunker de sobreviventes</Link>. Este refúgio, inicialmente físico, revela-se como um site dinâmico onde jogadores compartilham suas ideias de fichas para o Terra Devastada. Esse espaço virtual, onde as histórias de sobrevivência ganham vida por meio de personagens imaginários, conecta uma comunidade global em uma experiência coletiva e colaborativa. As fichas de personagens, como fragmentos de identidades fictícias, tornam-se contribuições valiosas para este vasto universo compartilhado.<br />
          <br />
          Neste santuário digital, o Terra Devastada transcende a mesa física, transformando-se em um farol de criatividade. As narrativas cativantes e estratégias compartilhadas não apenas enriquecem a experiência do jogo, mas também inspiram uma mentalidade resiliente e criativa para enfrentar os desafios da vida real. Assim, o RPG Terra Devastada não é apenas um jogo de mesa, mas uma jornada coletiva que transcende fronteiras, unindo sobreviventes em uma tapeçaria única de imaginação e solidariedade.
          <br />
          <br />
          <Link className='text-yellow-200' href="/survivors">Ass: O sobrevivente</Link>
        </p>
      </div>
    </div>
  );
}
