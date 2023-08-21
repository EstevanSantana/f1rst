import { EChartsOption } from 'echarts';
import { formatValuesPtBr } from './numberUtil';

export const createCharts = (values: any, 
    percentages: any,
    concluidas: any,
    totalMarcacoes: any) => {
    const option: EChartsOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        series: [
            {
                type: 'pie',
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: values, name: 'Concluidas', itemStyle: { color: '#47bbb0' } },
                    { value: percentages, itemStyle: { color: '#ced4da' } },
                ],
            },
        ],
        graphic: [
            {
                type: 'group',
                left: 'center',
                top: 'middle',
                children: [
                    {
                        type: 'text',
                        left: 'center',
                        top: 10,
                        style: {
                            text: `${concluidas}/${totalMarcacoes}`,
                            fontSize: 18,
                            fontWeight: 600
                        },
                    },
                    {
                        type: 'text',
                        left: 'center',
                        top: 30,
                        style: {
                            text: 'Marcações',
                            fontSize: 10,
                        },
                    },
                    {
                        type: 'text',
                        left: 'center',
                        top: 40,
                        style: {
                            text: 'Concluidas',
                            fontSize: 10,
                        },
                    },
                    {
                        type: 'rect',
                        left: 'center',
                        top: 'middle',
                        shape: {
                            width: 100,
                            height: 0.7,
                        },
                        style: {
                            fill: '#bdc3c7',
                        },
                    },
                    {
                        type: 'text',
                        left: 'center',
                        bottom: 1,
                        style: {
                            text: `${formatValuesPtBr(values)}%`,
                            fontSize: 32,
                            fontWeight: 600
                        },
                    },
                ],
            },
        ],
    };

    return option;
}

