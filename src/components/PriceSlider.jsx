import React, { useEffect, useState } from 'react'

// Importar CSS
import './css/PriceSlider.css';

export default function PriceSlider(props) {
    const [min, setMin] = useState(props.min);
    const [max, setMax] = useState(props.max);
    const [left, setLeft] = useState('0%');
    const [right, setRight] = useState('0%');

    function changeRangeMin(e) {
        if ((parseInt(e.target.value) - max) >= -props.step) {
            // console.log('Limite mínimo alcançado!');
        } else {
            setMin(parseInt(e.target.value));
            if (min == props.min) {
                setLeft("0%");
            } else {
                var totalBar = props.max - props.min;
                var qtsSteps = min - props.min;

                setLeft(((qtsSteps * 100) / totalBar) + "%");
            }
        }
    }

    useEffect(() => {
        if (min == props.min) {
            document.getElementById('inputMin').value = props.min;
        } else {
            document.getElementById('inputMin').value = min;
        }
        props.filterByPrice(props.catID, min, max);
    }, [min]);

    function changeRangeMax(e) {
        if ((parseInt(e.target.value) - min) <= props.step) {
            // console.log('Limite máximo alcançado!');
        } else {
            setMax(parseInt(e.target.value));
            if (max == props.max) {
                setRight("0%");
            } else {
                var totalBar = props.max - props.min;
                var qtsSteps = props.max - max;

                setRight(((qtsSteps * 100) / totalBar) + "%");
            }
        }
    }

    useEffect(() => {
        if (max == props.max) {
            document.getElementById('inputMax').value = props.max + "+";
        } else {
            document.getElementById('inputMax').value = max;
        }
        props.filterByPrice(props.catID, min, max);
    }, [max]);

    function validation(e) {
        // Campo input min
        let inputMin = document.getElementById('inputMin');
        // Campo input max
        let inputMax = document.getElementById('inputMax');
        // Pegar o valor do campo input
        let value = parseInt(e.target.value);
        // Se o campo input for input min
        if (e.target.id == "inputMin") {
            // Verificar se o campo é vazio ou null
            if (e.target.value == "" || e.target.value == null) {
                // Setar para o mínimo permitido
                setMin(props.min);
                setLeft("0%");
                // Mudar o valor do campo input min para o valor mínimo
                inputMin.value = props.min;
            } else {
                // Verificar se o valor é menor que o mínimo
                if (value < props.min) {
                    // Setar para o mínimo permitido
                    setMin(props.min);
                    setLeft("0%");
                    // Mudar o valor do campo input min para o valor mínimo
                    inputMin.value = props.min;
                } else {
                    // Valor é maior que o mínimo permitido - OK
                    // Verificar se o mínimo é maior que o máximo
                    if (value >= max) {
                        let correct = max - props.step;
                        setMin(correct);

                        var totalBar = props.max - props.min;
                        var qtsSteps = value - props.min;

                        setLeft(((qtsSteps * 100) / totalBar) + "%");

                        inputMin.value = correct;
                    } else {
                        // Tudo certo
                        setMin(value);

                        // Movimentar a barra
                        var totalBar = props.max - props.min;
                        var qtsSteps = value - props.min;

                        setLeft(((qtsSteps * 100) / totalBar) + "%");
                    }
                }
            }
        }
        // Se o campo for input max
        if (e.target.id == "inputMax") {
            // Verificar se valor digitado é vazio ou null
            if (e.target.value == "" || e.target.value == null) {
                // Setar para o máximo permitido
                setMax(props.max);
                setRight("0%");
                inputMax.value = props.max + "+";
            } else {
                // Se o valor digitado for maior que o máximo permitido
                if (value > props.max) {
                    // Setar para o máximo permitido
                    setMax(props.max);
                    setRight("0%");
                    // Mudar o campo para o máximo +
                    inputMax.value = props.max + "+";
                } else {
                    // Valor digitado é menor que o máximo permitido
                    // Verificar se o máximo é menor que o mínimo
                    if (value <= min) {
                        let correct = min + props.step;
                        setMax(correct);

                        var totalBar = props.max - props.min;
                        var qtsSteps = props.max - value;

                        setRight(((qtsSteps * 100) / totalBar) + "%");
                        inputMax.value = correct;
                    } else {
                        // Tudo certo
                        // Se valor digitado é maior que o mínimo
                        setMax(value);

                        var totalBar = props.max - props.min;
                        var qtsSteps = props.max - value;

                        setRight(((qtsSteps * 100) / totalBar) + "%");
                    }
                }
            }
        }
    }

    function onlyNum(e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    return (
        <div>
            <div className="slider">
                <div style={{ left: left, right: right }} className="progress"></div>
            </div>
            <div className="range-input">
                <input id='rangeMin' onChange={changeRangeMin} type="range" min={props.min} max={props.max} value={min} step={props.step} />
                <input id='rangeMax' onChange={changeRangeMax} type="range" min={props.min} max={props.max} value={max} step={props.step} />
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label className="text-muted">preço mínimo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMin' onBlur={validation} onKeyDown={(e) => {
                            (e.key == "Enter" ? validation(e) : (e.key == "Backspace" ? null : onlyNum(e)))
                        }}
                            type="text" className="form-control" placeholder="Min" />
                    </div>
                </div>
                <div className="col">
                    <label className="text-muted">preço máximo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id='inputMax' onBlur={validation} onKeyDown={(e) => {
                            (e.key == "Enter" ? validation(e) : (e.key == "Backspace" ? null : onlyNum(e)))
                        }}
                            type="text" className="form-control" placeholder="Max" />
                    </div>
                </div>
            </div>
        </div>
    )
}
