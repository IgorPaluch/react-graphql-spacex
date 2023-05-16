const useTechInfo = ({name, rocket, engine, isEngine}) => {
    const header = name.toUpperCase();

    const firstRow = {
        title: isEngine ? 'NUMBER' : 'HEIGHT',
        value: isEngine ? engine.number : rocket.height,
    };
    const secondRow = {
        title: isEngine ? 'PROPELLANT1' : 'DIAMETER',
        value: isEngine ? engine.propellant_1 : rocket.diameter
    };
    const thirdRow = {
        title: isEngine ? 'PROPELLANT2' : 'STAGES',
        value: isEngine ? engine.propellant_2 : rocket.stages,
    };
    const fourthRow = {
        title: isEngine ? 'THRUST TO WEIGHT' : 'COST PER LAUNCH',
        value: isEngine ? engine.thrust_to_weight : rocket.cost,
    };

    const body = [firstRow, secondRow, thirdRow, fourthRow];

    const img = `../assets/${name.replace(/\s+/g, '')}.png`;

    return {
        header,
        body,
        img
    }
}

export default useTechInfo;