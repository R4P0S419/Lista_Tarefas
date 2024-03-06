$(document).ready(function() {


    $('ul').on('click', 'li', function() {
        $(this).toggleClass('concluido');
        if ($(this).hasClass('concluido')) {
            $(this).css('text-decoration', 'line-through');
        } else {
            $(this).css('text-decoration', 'none');
            $(this).css('font-weight', 'normal');
        }
    });

    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li> </li>');

        $(`<p class="concluido">${nomeTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');

        $('#nome-tarefa').val('')
    })


})