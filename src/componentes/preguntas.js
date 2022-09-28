const preguntas = [
    {
        titulo: "En mi opinion que es lo mas importante",
        opciones: [
            { textoRespuesta: "A: Formar parte de un grupo solido", IsCorrect: true },
            { textoRespuesta: "B: Ser el mejor en lo que hago", IsCorrect: false },
            { textoRespuesta: "C: Tener un lider en quien inspirarme ", IsCorrect: false },
            { textoRespuesta: "D: Ser fiel a mis principios personales ", IsCorrect: false },
            { textoRespuesta: "E: No estoy seguro de que es lo mas importante", IsCorrect: false },

        ],
    },


   
{
    titulo: "2.Si alguien se quiere pasar de listo conmigo me enfurezco:",
    opciones: [
        { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false},
        { textoRespuesta: "B.De acuerdo", isCorrect: true},
        { textoRespuesta: "C.Indeciso", isCorrect: false},
        { textoRespuesta: "D. En desacuerdo", isCorrect: false},
        { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false},
    
    ],
    
},


    {
        titulo: "3.Si   Viera   a   dos    compañeros    discutir    acaloradamente me acercaría para averiguar cuál es   el   problema   y trataría de que hicieran las paces:",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },
    
    

    {
        titulo: "4.Al tomar decisiones hay que   basarse   en   los   principios del bien y el mal",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "5.Usted tiene una discusión con su supervisor inmediato respecto al desempeño de su trabajo. Usted:",
        opciones: [
            { textoRespuesta: "A.Continua trabajando pero se siente muy molesto y hace comentarios con sus compañeros", isCorrect: false },
            { textoRespuesta: "B.Continua trabajando pero empieza a buscar otras opciones", isCorrect: false },
            { textoRespuesta: "C.Ignora la situación y sigue trabajando", isCorrect: false },
            { textoRespuesta: "D.Vuelve a hablar con su supervisor para tratar de resolver la situación", isCorrect: true },
            { textoRespuesta: "E.Va con el jefe de su supervisor y Ie comenta el problema", isCorrect: false },

        ],

    },


    {
        titulo: "6.Para obtener el empleo que desea P, debe tener ciertos conocimientos que por el momento no posee pero que puede aprender rápidamente si estudia y pide ayuda a sus amigos. Cuando en la entrevista lo cuestionan sobre este punto P:",
        opciones: [
            { textoRespuesta: "A.Reconoce no poseer los conocimientos requeridos, pero aclara que se esforzara por adquirirlos", isCorrect: true },
            { textoRespuesta: "B.Comenta que tiene los conocimientos pero hace mucho no los ejerce", isCorrect: false },
            { textoRespuesta: "C.Afirma poseer todos los conocimientos necesarios.", isCorrect: false },
            { textoRespuesta: "D.Evade la pregunta", isCorrect: false },
            { textoRespuesta: "E.No sabe que contestar", isCorrect: false },

        ],

    },

    {
        titulo: "7.Cuando se descubre que un empleado ha estado robando, la empresa debe denunciarlo a la policía de inmediato, sean cuales fueren las razones del empleado para robar.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "8. El que trabajen hombres y mujeres juntos en el mismo lugar de trabajo puede generar problemas.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "9.Si veo mal vestido a algún compañero en la oficina me siento molesto",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "10.Está bien tomar un poco más   de   tiempo   a la   hora   de la comida si uno piensa terminar el trabajo puntualmente:",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "11.Es el último día de trabajo de un compañero y le organizan una pequeña reunión a la hora de la comida. Es comprensible que sus compañeros se excedan un poco con las copas, pues será la última vez que compartan un rato así con él",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "12.Alguna vez invente excusas para no asistir a un compromiso.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "13.La empresa está en su derecho de amonestar a un empleado que llegue algo maltrecho por haber bebido la noche anterior, aun cuando no esté bebiendo dentro de las instalaciones",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "14.Un Supervisor debe vigilar a un empleado aun cuando se sabe fuma algunos cigarrillos de marihuana sólo los fines de semana.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },

    {
        titulo: "15.No afecta a nadie el que un empleado tome cosas dañadas o inservibles de la empresa, ya que nadie las usara.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "16.Si un empleado tiene poco trabajo y no se siente con ánimos de trabajar ese día lo mejor que puede hacer es decir que se siente indispuesto e irse a su casa.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "17.Por lo general, en las empresas el hacer el trabajo muy rápido y bien solo consigue que le den a uno más trabajo por la misma paga.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: true },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },

    {
        titulo: "18.Es más importante dar a las personas libertad suficiente que exigirles que se apeguen a las reglas y costumbres.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "19.Hay personas que solo lo dejan a uno tranquilo si se les da un buen escarmiento.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "20.A veces se justifica faltar al trabajo si uno se siente agotado y necesita tomar un descanso para poder seguir adelante.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "21.Mis Compañeros piensan que soy un poco descuidado, pero agradable.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "22.Un empleado que roba para ayudar a un familiar enfermo no debe ser castigado como un ladrón común.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "23.Una persona no está robando si se lleva a su casa un artículo de oficina que piensa regresar después.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "24.De niño, alguna vez tome cosas que no me pertenecían.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "25.Si el jefe de D engaña a su superior, es comprensible que D a su vez engañe a su jefe",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "26.A veces es necesario usar la fuerza para hacerse respetar",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "27.El principio de 'ojo por ojo y diente por diente' hace que la gente respete más a sus semejantes.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "28.Mis familiares y amigos prefieren que yo no tenga ningún altercado con otras personas por temor a lo enfurecido que me puedo llegar a poner.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "29.En alguna ocasión me sentí verdaderamente enojado.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "30.Muchos de mis problemas son causados por las malas actitudes de otras personas.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: true },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "31.Una fiesta no es fiesta sin aperitivos.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "32.Las empresas deberían preocuparse más por la capacitación y seguridad de ",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "33.Nuestra conducta debe apegarse al ejemplo de los líderes que admiramos",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "34.En una empresa el supervisor no debe amonestar a sus empleados per llegar tarde si estos piensan reponer el tiempo a la hora de la salida.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "35.Si alguien nos ha engañado primero es justificable que lo engañemos a su vez.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "36.En general, la gente se aprovecharía siempre de los de más si tuviera la oportunidad de hacerlo.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "37.Es comprensible el que un empleado renuncie a su empleo de un día para otro si le ofrecen un empleo más interesante y mejor remunerado.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "38.M debe entregar un reporte de trabajo el viernes por la tarde, pero por diversas razones llega su hora de salida y no ha tenido tiempo de hacerlo. M decide elaborar el reporte el lunes a primera hora, pues considera que su jornada laboral ha terminado.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "39.Un compañero renuncia por razones personales, por lo que el trabajo se duplica. N, que trabaja en el mismo departamento:",
        opciones: [
            { textoRespuesta: "A.Retoma de buena gana el trabajo de su compañero y lo ve como una oportunidad de hacerse notar.", isCorrect: true },
            { textoRespuesta: "B.Retoma el trabajo de su compañero pero interiormente piensa que no le corresponde.", isCorrect: false },
            { textoRespuesta: "C.Trata de mantenerse al margen para que no le asignen trabajo extra.", isCorrect: false },
            { textoRespuesta: "D.Comenta directamente con su jefe que debe contratar pronto a otra persona, pues él no puede tomar más trabajo.", isCorrect: false },
            { textoRespuesta: "E.No se preocupa, pues de cualquier manera el no piensa trabajar tiempos extras", isCorrect: false },

        ],

    },

    {
        titulo: "40.C debe atender una llamada de un cliente asignado a otro compañero,   debido a que este falto al trabajo por estar enfermo. C:",
        opciones: [
            { textoRespuesta: "A.Le da solo la atención estrictamente necesaria, pues no es su cliente.", isCorrect: false },
            { textoRespuesta: "B.Le da la atención necesaria y trata de averiguar en qué más le puede ayudar", isCorrect: true },
            { textoRespuesta: "C.Le dice al cliente que será mejor que llame mañana para que lo atienda la persona adecuada", isCorrect: false },
            { textoRespuesta: "D.Trata de que otro compañero tome la llamada pues él está ya saturado con sus propios clientes", isCorrect: false },
            { textoRespuesta: "E.Le da la mejor atención posible al cliente y trata de convencerlo para que sea él su nuevo ejecutivo", isCorrect: false },

        ],

    },


    {
        titulo: "41.Nunca he desobedecido a mis padres o tutores",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "42.Hay algunas cosas de mí que no me gustan.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "43.Su jefe le solicita a J, sin previo aviso, que se quede a trabajar tiempo extra ese día. J, que había acordado ir al cine con un amigo se disculpa con su jefe, argumentado que se quedaría tiempo extra si le hubieran avisado con anticipación. La decisión de J es:",
        opciones: [
            { textoRespuesta: "A.Completamente aceptable", isCorrect: false },
            { textoRespuesta: "B.Aceptable", isCorrect: false },
            { textoRespuesta: "C.Inaceptable", isCorrect: true },
            { textoRespuesta: "D.Completamente inaceptable", isCorrect: false },
            { textoRespuesta: "E.No sabría cómo evaluar su conducta", isCorrect: false },

        ],

    },


    {
        titulo: "44.El Director general de la empresa donde trabaja Y Ie pide que lo mantenga informado de cualquier conducta inadecuada que observe en sus compañeros de trabajo. Y:",
        opciones: [
            { textoRespuesta: "A.Le informa de cualquier conducta inadecuada, aun si es de sus compañeros más cercanos.", isCorrect: true },
            { textoRespuesta: "B.Acepta informarle, pero no hace ningún comentario de sus compañeros más cercanos.", isCorrect: false },
            { textoRespuesta: "C.Acepta informarle, pero en los hechos nunca le hace ningún comentario concreto.", isCorrect: false },
            { textoRespuesta: "D.Se niega a apoyarlo con esta información.", isCorrect: false },
            { textoRespuesta: "E.No hace ningún comentario ante esta petición y al paso de los días no le hace ningún comentario concreto", isCorrect: false },

        ],

    },


    {
        titulo: "45.Por presiones de tiempo, P elabora un trabajo precipitadamente y con algunos errores.   Su supervisor no nota estés errores al revisar y autorizar el trabajo. P:",
        opciones: [
            { textoRespuesta: "A.Entrega el trabajo como esta,", isCorrect: false },
            { textoRespuesta: "B.Entrega el trabajo como esta, pero en el fondo se siente algo preocupado", isCorrect: false },
            { textoRespuesta: "C.No sabe que hacer.", isCorrect: false },
            { textoRespuesta: "D.Si tiene un rato libre corrige los errores", isCorrect: false },
            { textoRespuesta: "E.Le hace notar las fallas a su jefe y le pregunta si está bien que lo entregue así", isCorrect: true },

        ],

    },



    {
        titulo: "46.D se da cuenta que va a llegar un poco tarde al trabajo, por lo que se justifica el que le pida a un compañero que cheque por ella tarjeta de entrada.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "47.En muchos casos, los empleados se ven obligados a robar porque sus salarios son muy bajos.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },


    {
        titulo: "48.Un empleado que consume alguna droga para permanecer despierto durante la noche y poder así terminar un trabajo urgente de la empresa debe ser sancionado.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "49.Ciertas personas pueden usar cocaína sin caer en la adicción",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "50.Me enfurezco cuando me ofenden o me faltan al respeto.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: true },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },

    {
        titulo: "51.En la escuela me gustaban todas las materias.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "52.El que sus empleados tomen de vez en cuando una copa o una cerveza a la hora de la comida no debe ser motivo de sanción por parte de la empresa.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: true },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "53.Tengo algunos malos hábitos que me gustaría cambiar.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: true },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },

        ],

    },


    {
        titulo: "54.Es una exageración marcar un retardo a un empleado Por llegar con solo 5 minutos de retraso.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },

        ],

    },

    {
        titulo: "55.La gente hace bien su trabajo porque:",
        opciones: [
            { textoRespuesta: "A.Un supervisor revisa lo que hacen", isCorrect: false },
            { textoRespuesta: "B.Los clientes pueden quejarse", isCorrect: false },
            { textoRespuesta: "C.No quieren perder su trabajo", isCorrect: false },
            { textoRespuesta: "D.Le gusta hacerlo así", isCorrect: true },
            { textoRespuesta: "E.Le van a pagar bien", isCorrect: false },

        ],

    },


    {
        titulo: "56.F ha laborado durante varios años en una empresa en la que es apreciado por sus supervisores y compañeros, pero en la que no hay mayores posibilidades de superación económica o laboral. Si F recibe otra oferta de trabajo en la que tenga mejores opciones, debe:",
        opciones: [
            { textoRespuesta: "A.Renunciar de inmediato y tomar la oferta", isCorrect: false },
            { textoRespuesta: "B.Hablar con sus supervisores respecto a su futuro profesional y exponer la situación", isCorrect: true },
            { textoRespuesta: "C.Avisar que dejara el empleo en unos días, pues ha aceptado otra oferta", isCorrect: false },
            { textoRespuesta: "D.Pedir un aumento a cambio de no renunciar Seguir en su empleo actual, donde ya tiene una trayectoria laboral y es apreciado", isCorrect: false },

        ],

    },

    {
        titulo: "57.M recién fue aceptado en un empleo después de varios meses de estar desocupado. Después de un tiempo, descubre que su jefe participa en actividades ilícitas dentro de la empresa. Su jefe le ofrece una compensación económica a cambio de que sea discreto, esto es:",
        opciones: [
            { textoRespuesta: "A.Definitivamente reprobable", isCorrect: true },
            { textoRespuesta: "B.Reprobable", isCorrect: false },
            { textoRespuesta: "C.No lo se", isCorrect: false },
            { textoRespuesta: "D.Aceptable", isCorrect: false },
            { textoRespuesta: "E.Definitivamente aceptable", isCorrect: false },
        ],

    },


    {
        titulo: "58.Los bancos no debieran ser tan estrictos al penalizar a sus clientes por pagar su tarjeta de crédito tan solo uno o dos días después de la fecha límite de pago:",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },
        ],

    },


    {
        titulo: "59.He querido comprar cosas que no puedo pagar.",
        opciones: [
            { textoRespuesta: "A.Nunca", isCorrect: false },
            { textoRespuesta: "B.Rara vez", isCorrect: true },
            { textoRespuesta: "C.Algunas veces", isCorrect: false },
            { textoRespuesta: "D.Con frecuencia", isCorrect: false },
            { textoRespuesta: "E.En todo momento", isCorrect: false },
        ],

    },


    {
        titulo: "60.A veces me arrepiento de haberme enojado demasiado por cuestiones que después parecen no tener tanta importancia.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: true },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },
        ],

    },



    {
        titulo: "61.En general, la gente tiende a ser agresiva e irrespetuosa.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },
        ],

    },

    {
        titulo: "62.T olvido confirmar una entrega, lo que causa dificultades a la empresa. Por las circunstancias, el supervisor de T cree que el error provino de otra persona. Si T reportara su error seria seriamente reprendido o podría incluso perder su empleo. T:",
        opciones: [
            { textoRespuesta: "A.Decide no decir nada", isCorrect: false },
            { textoRespuesta: "B.Aclara lo que paso con su supervisor, con la esperanza de que todo se arregle", isCorrect: true },
            { textoRespuesta: "C.Apoya la idea de su supervisor de que fue otro el responsable", isCorrect: false },
            { textoRespuesta: "D.No dice nada, pero se vuelve más cuidadoso con lo que hace", isCorrect: false },
            { textoRespuesta: "E.Habla con la persona que su jefe supone responsable, para llegar a una solución juntos", isCorrect: false },
        ],

    },


    {
        titulo: "63.V trabaja como secretaria en una oficina. Su supervisor le solicita elaborar un documento con información de la cual ella tiene una idea general, pero que corroborarla requeriría de una revisión laboriosa de expedientes que retrasaría el resto de su trabajo, V:",
        opciones: [
            { textoRespuesta: "A.Elabora el documento con la información que recuerda, confiando en su memoria.", isCorrect: false },
            { textoRespuesta: "B.Elabora el documento con la información que recuerda, advirtiendo a su jefe que es información aproximada", isCorrect: false },
            { textoRespuesta: "C.Revisa todos los expedientes para corroborar la información y entrega el documento ese mismo día, aunque tenga que trabajar en la hora de la comida.", isCorrect: true },
            { textoRespuesta: "D.Revisa todos los expedientes pero le dice a su supervisor que el documento estará listo hasta el día siguiente", isCorrect: false },
            { textoRespuesta: "E.Elabora el documento con la información que recuerda y pide a su supervisor su firma donde avale que la información es correcta", isCorrect: false },
        ],

    },



    {
        titulo: "64.Q Trabajaba en una empresa en la que manejaba información confidencial e importante. Actualmente el usar esa información en su nuevo empleo podría ayudarle a desempeñar mejor su trabajo   y   ser   notado por sus nuevos jefes. Lo mejor que puede hacer es:",
        opciones: [
            { textoRespuesta: "A.Usar la información que conoce, pues ya no tiene ningún compromiso con la empresa anterior.", isCorrect: false },
            { textoRespuesta: "B.Usar la información advirtiendo primero a sus jefes anteriores que ya no tiene ningún compromiso con ellos.", isCorrect: false },
            { textoRespuesta: "C.No usar la información, pues le pertenece a otros", isCorrect: true },
            { textoRespuesta: "D.Usar la informaci6n indirectamente, de manera que nadie note de donde proviene.", isCorrect: false },
            { textoRespuesta: "E.No lo se", isCorrect: false },
        ],

    },

    {
        titulo: "65.T hace mejor su trabajo cuando fuma un cigarrillo de marihuana. En este caso, T no debiera sersancionado por el consumo de un producto que lo hace rendir mejor.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },
        ],

    },


    {
        titulo: "66.B acepta una oferta de trabajo en otro estado de la Republica. La empresa le paga los gastos de traslado y le adelanta un mes de sueldo para su instalación. Sin embargo, recibe una oferta de trabajo más interesante y mejor pagado. Lo mejor que puedehacer B, es devolver el dinero y tomar la nueva oferta.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: true },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: false },
        ],

    },

    {
        titulo: "67.V descubre que un compañero, que es además buen amigo suyo, está buscando otro empleo sin notificar a la empresa, lo que podría afectar la organización del departamento. V:",
        opciones: [
            { textoRespuesta: "A.No interviene, pues es asunto de la empresa", isCorrect: false },
            { textoRespuesta: "B.Trata de convencer a su amigo de que hable con los supervisores", isCorrect: true },
            { textoRespuesta: "C.Notifica a sus superiores, aun si llega a tener problemas con su amigo", isCorrect: false },
            { textoRespuesta: "D.Le parece incorrecto, pero no comenta nada pues no quiere tener problemas con su amigo", isCorrect: false },
            { textoRespuesta: "E.No sabe que hacer", isCorrect: false },
        ],

    },

    {
        titulo: "68.Una persona debe perder su licencia de manejo definitivamente si es sorprendida manejando bajo los efectos del alcohol.",
        opciones: [
            { textoRespuesta: "A.Completamente en desacuerdo", isCorrect: false },
            { textoRespuesta: "B.De desacuerdo", isCorrect: false },
            { textoRespuesta: "C.No lo se", isCorrect: false },
            { textoRespuesta: "D. De acuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente de acuerdo", isCorrect: true },
        ],

    },


    {
        titulo: "69.A veces dejo que mis acciones se sean influidas por mi enojo.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },
        ],

    },


    {
        titulo: "70.En alguna ocasión actué sin razonar mi comportamiento.",
        opciones: [
            { textoRespuesta: "A.Completamente de acuerdo", isCorrect: false },
            { textoRespuesta: "B.De acuerdo", isCorrect: false },
            { textoRespuesta: "C.Indeciso", isCorrect: false },
            { textoRespuesta: "D. En desacuerdo", isCorrect: false },
            { textoRespuesta: "E. Completamente en desacuerdo", isCorrect: true },
        ],

    },

];

export default preguntas;