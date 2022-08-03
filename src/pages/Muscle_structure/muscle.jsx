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

						<img src={male} alt="" className="" />
						<img src={maleBack} alt="" className="" />
						<img src={neck} alt="" className="muscle neck" />
						<img src={trapec} alt="" className="muscle trapec" />
						<img src={delta} alt="" className="muscle delta" />
						<img src={grud} alt="" className="muscle grud" />
						<img src={biceps} alt="" className="muscle biceps" />
						<img src={predpl} alt="" className="muscle predpl" />
						<img src={press} alt="" className="muscle press" />
						<img src={jivotkos} alt="" className="muscle jivotkos" />
						<img src={kvadriceps} alt="" className="muscle kvadriceps" />
						<img src={golen} alt="" className="muscle golen" />



						<img src={trapecspina} alt="" className="muscle trapecspina" />
						<img src={deltaspina} alt="" className="muscle deltaspina" />
						<img src={triceps} alt="" className="muscle triceps" />
						<img src={spina} alt="" className="muscle spina" />
						<img src={yagodic} alt="" className="muscle yagodic" />
						<img src={bicepsbedra} alt="" className="muscle bicepsbedra" />
						<img src={golenspina} alt="" className="muscle golenspina" />

					</div>
				</div>
			</div>
		</>
	)
}

export default Muscle;