import { Component, ViewEncapsulation } from '@angular/core';

declare var $:any;

interface Table {
  columns: any;
  tableId: any;
}

@Component({
  template: ``,
  styleUrls: [
    './table.component.css'
  ]
})
export class TableComponent implements Table {
  columns : any;
  tableId: string;
  endPoint: string;
  tableRef: any;

  renderSearchInput() {
    $(`#${this.tableId} tfoot th`).each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="'+title+'" />' );
    });
  }

  renderTable(data: any = null) {
    //$.fn.dataTable.ext.errMode = 'none'; // disable error warning
    let tableConfiguration = this.getTableConfiguration(data);
console.log(tableConfiguration);
    this.tableRef = $(`#${this.tableId}`).DataTable(tableConfiguration);
console.log(tableConfiguration);
    // Apply the search
    this.tableRef.columns().every( function () {
      let that = this;
      $( 'input', this.footer() ).on( 'keyup change', function () {
        if ( that.search() !== this.value ) {
          that.search( this.value ).draw();
        }
      });
    });
  }

  getTableConfiguration(data: any) {
    let configuration =  {
      //"processing": true,
      "responsive": true,
      "serverSide": true,
      "columns": this.columns,
      "language": {
        "lengthMenu": "_MENU_ items per page",
        "zeroRecords": "Nothing found - sorry",
        "info": "_PAGE_ of _PAGES_",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "paginate": {
          "first" : "<i class='fa fa-step-backward'></i>",
          "last" : "<i class='fa fa-step-forward'></i>",
          "next" : "<i class='fa fa-caret-right'></i>",
          "previous": "<i class='fa fa-caret-left'></i>"
        }
      },
      "dom":  "<'row'<'col-sm-12'tr>>" +
              "<'row'<'col-sm-5'p><'col-sm-2'l>'<'col-sm-5 text-right'i>>",
      "pagingType": "full_numbers",
      "drawCallback": ( settings ) => {
        this.addEventListeners();
      }
    };

    if (data) {
      configuration['data'] = data;
    } else {
      configuration['ajax'] = {
        "url" : this.buildAjaxUrl(),
        "dataSrc": ( json ) => {
          let columns = this.columns.map(function(column) {
            return column['data'];
          });

          let emptyRow = {};
          columns.forEach((element) => {
            emptyRow[element] = '';
          });

          for ( let i=0, ien=json.data.length ; i<(10-ien) ; i++ ) {
            json.data.push(emptyRow);
          }
          return json.data;
        }
      }
    }

    console.log(configuration);

    return configuration;
  }

  buildAjaxUrl() {
    let token = localStorage.getItem('token');
    let endPoint = this.endPoint;
    let separator = this.endPoint.includes('?') ? '&' : '?';
    return `${this.endPoint}${separator}token=${token}`;
  }

  addEventListeners() {
    console.log('default');
  }
}