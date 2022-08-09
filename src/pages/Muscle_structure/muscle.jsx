import male from "../../img/muscle structure/male/m1.png";
import maleBack from "../../img/muscle structure/male/m2.png";
import delta from "../../img/muscle structure/male/delta.png";
import trapec from "../../img/muscle structure/male/trapec.png";
import biceps from "../../img/muscle structure/male/biceps.png";
import predpl from "../../img/muscle structure/male/predpl.png";
import jivotkos from "../../img/muscle structure/male/jivotkos.png";
import press from "../../img/muscle structure/male/press.png";
import neck from "../../img/muscle structure/male/neck.png";
import grud from "../../img/muscle structure/male/grud.png";
import kvadriceps from "../../img/muscle structure/male/kvadriceps.png";
import golen from "../../img/muscle structure/male/golen.png";


import trapecspina from "../../img/muscle structure/male/trapecspina.png";
import deltaspina from "../../img/muscle structure/male/deltaspina.png";
import triceps from "../../img/muscle structure/male/triceps.png";
import spina from "../../img/muscle structure/male/spina.png";
import yagodic from "../../img/muscle structure/male/yagodic.png";
import bicepsbedra from "../../img/muscle structure/male/bicepsbedra.png";
import golenspina from "../../img/muscle structure/male/golenspina.png";

import "../Muscle_structure/muscle.css";

const Muscle = () => {
	return (
		<>
			<div className="container">
				<div className="anatomy">

					<div className="body_anatomy">

						<img src={male} alt="мужчина" className="" />
						<img src={maleBack} alt="мужчина со спины" className="" />
						<img src={delta} alt="Дельтовидные" className="muscle delta" />
						<img src={trapec} alt="Трапеции" className="muscle trapec" />
						<img src={biceps} alt="Бицепсы" className="muscle biceps" />
						<img src={predpl} alt="Мышцы предплечья" className="muscle predpl" />
						<img src={jivotkos} alt="Косые мышцы живота" className="muscle jivotkos" />
						<img src={press} alt="Пресс" className="muscle press" />
						<img src={neck} alt="Мышцы шеи" className="muscle neck" />
						<img src={grud} alt="Грудные мышцы" className="muscle grud" />
						<img src={kvadriceps} alt="Квадрицепсы" className="muscle kvadriceps" />
						<img src={golen} alt="Мышцы голени" className="muscle golen" />


						<img src={deltaspina} alt="Дельтовидные" className="muscle deltaspina" />
						<img src={triceps} alt="Трицепс" className="muscle triceps" />
						<img src={trapecspina} alt="Трапеции" className="muscle trapecspina" />
						<img src={spina} alt="Широчайшие мышцы спины" className="muscle spina" />
						<img src={yagodic} alt="Ягодичные мышцы" className="muscle yagodic" />
						<img src={bicepsbedra} alt="Бицепс бедра" className="muscle bicepsbedra" />
						<img src={golenspina} alt="Мышцы голени" className="muscle golenspina" />

					</div>
				</div>
			</div>
		</>
	)
}

export default Muscle;