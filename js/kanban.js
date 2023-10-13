const prioridadeBaixa = '<span class="badge badge-success">Prioridade baixa</span>';
const prioridadeMedia = '<span class="badge badge-warning">Prioridade média</span>';
const prioridadeAlta = '<span class="badge badge-danger">Prioridade alta</span>';

var kanban = new jKanban({
    element: "#myKanban",
    gutter: "10px",
    widthBoard: "100%",
    buttonClick: function (el, boardId) {
        var formItem = document.createElement("form");
        formItem.setAttribute("class", "itemform");
        formItem.innerHTML = '<div class="form-group"><textarea class="form-control" rows="2" autofocus></textarea></div><div class="form-group"><button type="submit" class="btn btn-primary btn-xs pull-right">Submit</button><button type="button" id="CancelBtn" class="btn btn-default btn-xs pull-right">Cancel</button></div>';
    },
    boards: [
        {
            id: "_todo",
            title: "",
            class: "info,good",
            dragTo: ["_working"],
            item: [

                {
                    id: "_test_delete",
                    title: '<div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0"><span class="text-red">#0005</span> - ADS - Sala 422</h5><span class="h4 font-weight-bold mb-0">Sem conexão com a internet</span></div></div><p class="mt-1 mb-0 text-sm"><span class="text-nowrap text-decoration-none text-primary">Aberto por: Eduardo Evaristo</span><span class="text-nowrap text-decoration-none text-muted"><br>Data de Abertura: 08/10/2023 07:50</span></p>' + prioridadeBaixa + '</div>',
                }
                /* {
                    id: "_test_delete",
                    title: '<div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0"><span class="text-red">#0005</span> - ADS - Sala 422</h5><span class="h4 font-weight-bold mb-0">Computador sem periféricos</span></div></div><p class="mt-1 mb-0 text-sm"><span class="text-nowrap text-decoration-none text-primary">Aberto por: Alexandre Benevenuto</span><span class="text-nowrap text-decoration-none text-muted"><br>Data de Abertura: 08/10/2023 07:50</span></p>' + prioridadeMedia + '</div>',
                },
                {
                    id: "_test_delete",
                    title: '<div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0"><span class="text-red">#0005</span> - ADS - Sala 422</h5><span class="h4 font-weight-bold mb-0">Sem conexão com a internet</span></div></div><p class="mt-1 mb-0 text-sm"><span class="text-nowrap text-decoration-none text-primary">Aberto por: Eduardo Evaristo</span><span class="text-nowrap text-decoration-none text-muted"><br>Data de Abertura: 08/10/2023 07:50</span></p>' + prioridadeAlta + '</div>',
                },
                {
                    id: "_test_delete",
                    title: '<div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0"><span class="text-red">#0005</span> - ADS - Sala 422</h5><span class="h4 font-weight-bold mb-0">Sem conexão com a internet</span></div></div><p class="mt-1 mb-0 text-sm"><span class="text-nowrap text-decoration-none text-primary">Aberto por: Eduardo Evaristo</span><span class="text-nowrap text-decoration-none text-muted"><br>Data de Abertura: 08/10/2023 07:50</span></p></div>',
                } */
            ]
        },
    ]
});

var kanban2 = new jKanban({
    element: "#myKanban2",
    gutter: "10px",
    widthBoard: "100%",
    buttonClick: function (el, boardId) {
        var formItem = document.createElement("form");
        formItem.setAttribute("class", "itemform");
        formItem.innerHTML =
            '<div class="form-group"><textarea class="form-control" rows="2" autofocus></textarea></div><div class="form-group"><button type="submit" class="btn btn-primary btn-xs pull-right">Submit</button><button type="button" id="CancelBtn" class="btn btn-default btn-xs pull-right">Cancel</button></div>';

        // Adicione o card com conteúdo HTML personalizado como uma string de texto
        kanban2.addElement(boardId, {
            class: ["custom-card"], // Adicione uma classe para personalizar o estilo (conforme mencionado anteriormente)
        });
        kanban2.addForm(boardId, formItem);
    },
    boards: [
        {
            id: "_todo",
            title: "",
            class: "info,good",
            dragTo: ["_working"],
            item: [
                {
                    id: "_test_delete",
                    title: "Try drag this (Look the console)",
                },
                {
                    title: "Try Click This!",
                    class: ["peppe", "bello"]
                }
            ]
        },
        {
            id: "_working",
            title: "Working (Try drag me too)",
            class: "warning",
            item: [
                {
                    title: "Do Something!"
                },
                {
                    title: "Run?"
                }
            ]
        },
        {
            id: "_done",
            title: "Done (Can drop item only in working)",
            class: "success",
            dragTo: ["_working"],
            item: [
                {
                    title: "All right"
                },
                {
                    title: "Ok!"
                }
            ]
        }
    ]
});