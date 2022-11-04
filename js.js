// (function (window, $, _) {
    // <!-- 30/10/2015 03:48 -->

    /*
     * :::: CONTAINERS :::: START
     */
    var $formCatalogo = $("#form-catalogo");
    var $txtRazonSocial = $("#txtRazonSocial");
    var $selTipoDoc = $("#selTipoDocumento");
    var $txtLugarEntrega = $("#txtLugarEntrega");
    var $txtFechaVencimiento = $("#txtFechaVencimiento");
	var $txtFechaEmision = $("#txtFechaEmision");
    var $txtIndicador = $("#txtIndicador");
    var $modalDirecciones = $("#modal-direcciones");
    var $tablaDireccionesReceptor = $modalDirecciones.find("#tabla-direcciones-receptor");
    var $tablaDocumento = $("#tabla-documento-relacionado");
    var $tablaItem = $("#tabla-item");
    var $modalListaDocumentoRelacionado = $("#modal-mostrar-documento-relacionado");
    var $modalListaItems = $("#modal-mostrar-items");
    var $modalDocumentoRelacionado = $("#modal-documento-relacionado")
    var $formModalDocumentoRelacionado = $modalDocumentoRelacionado.find('#form-modal-documento-relacionado');
    var $selTipoDocumentoRelacionado = $formModalDocumentoRelacionado.find('#selTipoDocumentoRelacionado');
    var $txtSerie = $formModalDocumentoRelacionado.find('#txtSerie');
    var $modalItem = $("#modal-item")
    var $formModalItem = $modalItem.find('#form-modal-item');
    var $txtCodigo = $formModalItem.find('#txtCodigo');
    var $txtDescripcion = $formModalItem.find('#txtDescripcion');
    var $selUnidadMedida = $formModalItem.find('#selUnidadMedida');
	var $tipoIGV = $formModalItem.find('#tipoIGV');
    var $selTipo = $formModalItem.find('#selTipo');
	var $selTipoIgv = $formModalItem.find('#selTipoIgv');//
    var $btnOpenModalDR = $('#open-modal-documento-relacionado');
    var $btnOpenModalItem = $('#open-modal-item');
    var $btnOpenModalSearch = $('#open-modal-search');
    var $modalSearch = $("#modal-search");
    var $tablaProducto = $modalSearch.find("#tabla-producto");
    var $formSearch = $modalSearch.find('#form-modal-search');
    var $txtProductQuery = $formSearch.find('#product-query');
    var $lblTotalVentaGravado = $('#total-valor-venta-gravado');
    var $lblTotalValorDescuentos = $('#total-valor-descuentos');
    var $lblTotalTotalIGV = $('#total-igv');
    var $lblTotalImporteICBPER= $('#importe-icbper');
    var $lblTotalImporteTotal = $('#importe-total');
    var $modalDatepicker = $('#modal-datepicker');
    var $datepicker = $modalDatepicker.find("#datepicker-placeholder");
    var $datepickerHidden = $modalDatepicker.find("#datepicker-value");
    var $btnCloseDatepicker = $modalDatepicker.find('#modal-datepicker-close');
    var $formBoletaDatosReceptor = $('#form-boleta-datos-receptor');
    var $RUCField = $('#txtRuc, #txtDocumento');
    var $razonSocial = $('#txtRazonSocial');
    var $btnValidarDatosReceptor = $('#btnValidarDatosReceptor');
    var $btnContinuar = $('#btnContinuarPaso');
    var $modalPreloader = $('#modalPreloader');
    var $panelBoletaDatosReceptor = $('#panel-boleta-datos-receptor');
    var $panelDatosComprobante = $('#panel-datos-comprobante');
    var $panelDocumentosRelacionados = $('#panel-documentos-relacionados');
    var $panelItems = $('#panel-items');
    var $panelResumen = $('#panel-resumen');
    var $btnMostrarModalDR = $panelDocumentosRelacionados.find('#btnMostrarModalDR');
    var $btnMostrarModalItems = $panelItems.find('#btnMostrarModalItems');
    var $selMoneda = $panelDatosComprobante.find('#selMoneda');
    var $btnPreview = $('#btnPreview');
    var $btnVolverBoleta = $('#btnVolverBoleta');
    var $hiddenRucEmisor = $("#rucEmisor");
    var $hiddenDireccionEmisor = $("#direccionEmisor");
    var $hiddenRazonSocialEmisor = $("#razonSocialEmisor");
    var $hiddenNombreComercialEmisor = $("#nombreComercialEmisor");
    var $hiddenDepartamentoEmisor = $("#departamentoEmisor");
    var $hiddenNrus = $("#tributoNrus");
    var $formItem = $("#form-item")
    var $hiddenHelperItem = $formItem.find("#hiddenHelperItem");
    var $formDR = $("#form-modal-documento-relacionado")
    var $hiddenHelperDR = $formDR.find("#hiddenHelperDR");
    var $formComprobante = $("#form-datos-comprobante")
    var $btnEmitirBoleta = $("#btnEmitirBoleta");
    var total_venta=0;
    /* 
     *  :::: CONTAINERS :::: END
     */
    /*
     *  :::: HELPERS :::: START
     */
    var _tipoDocumentoIdentidad = {
        "1": "DNI",
        "7": "PASAPORTE",
        "4": "CARNET DE EXTRANJERIA",
        "6": "RUC",
        "-": "SIN DOCUMENTO",
        "A": "CED DIPLOMATICA DE IDENTIDAD"
    }
	
    var _tipoDocumentoRelacionado = {
        '09': 'Guia de Remisi&oacute;n Remitente',
        '31': 'Guia de Remisi&oacute;n de Transporte',
        '00': 'Otros',
    }
	
	// PAS20201U210100020
	var _tipoMedida = {
		'NIU': 'UNIDAD',
		'KGM': 'KILOGRAMO',
		'BX': 'CAJA',
		'PK': 'PAQUETE',
		'TNE': 'TONELADAS',
		'BJ': 'BALDE',
		'BLL': 'BARRILES',
		'4A': 'BOBINAS',
		'BG': 'BOLSA',
        'BO': 'BOTELLAS',
		'CT': 'CARTONES',
		'CMK': 'CENTIMETRO CUADRADO',
		'CMQ': 'CENTIMETRO CUBICO',
		'CMT': 'CENTIMETRO LINEAL',
		'CEN': 'CIENTO DE UNIDADES',
		'CY': 'CILINDRO',
		'CJ': 'CONOS',
		'DZN': 'DOCENA',
		'DZP': 'DOCENA POR 10**6',
		'BE': 'FARDO',
		'GLI': 'GALON INGLES (4,545956L)',
		'GRM': 'GRAMO',
		'GRO': 'GRUESA',
		'HLT': 'HECTOLITRO',
		'LEF': 'HOJA',
		'SET': 'JUEGO',
		'KTM': 'KILOMETRO',
		'KWH': 'KILOVATIO HORA',
		'KT': 'KIT',
		'CA': 'LATAS',
		'LBR': 'LIBRAS',
		'LTR': 'LITRO',
		'MWH': 'MEGAWATT HORA',
		'MTR': 'METRO',
		'MTK': 'METRO CUADRADO',
		'MTQ': 'METRO CUBICO',
		'MGM': 'MILIGRAMOS',
		'MLT': 'MILILITRO',
		'MMT': 'MILIMETRO',
		'MMK': 'MILIMETRO CUADRADO',
		'MMQ': 'MILIMETRO CUBICO',
		'MLL': 'MILLARES',
		'UM': 'MILLON DE UNIDADES',
		'ONZ': 'ONZAS',
		'PF': 'PALETAS',
		'PR': 'PAR',
		'FOT': 'PIES',
		'FTK': 'PIES CUADRADOS',
		'FTQ': 'PIES CUBICOS',
		'C62': 'PIEZAS',
		'PG': 'PLACAS',
		'ST': 'PLIEGO',
		'INH': 'PULGADAS',
		'RM': 'RESMA',
		'DR': 'TAMBOR',
		'STN': 'TONELADA CORTA',
		'LTN': 'TONELADA LARGA',
		'TU': 'TUBOS',
		'ZZ': 'UNIDAD',
		'GLL': 'US GALON (3,7843 L)',
        'YRD': 'YARDA',
		'YDK': 'YARDA CUADRADA'
    }
	
	/*
    var _tipoMedida = {
        '4A': 'BOBINAS',
        'BE': 'FARDO',
        'BG': 'BOLSA',
        'BJ': 'BALDE',
        'BLL': 'BARRILES',
        'BO': 'BOTELLAS',
        'BX': 'CAJA',
        'C62': 'PIEZAS',
        'CA': 'LATAS',
        'CEN': 'CIENTO DE UNIDADES',
        'CJ': 'CONOS',
        'CMK': 'CENTIMETRO CUADRADO',
        'CMQ': 'CENTIMETRO CUBICO',
        'CMT': 'CENTIMETRO LINEAL',
        'CT': 'CARTONES',
        'CY': 'CILINDRO',
        'DR': 'TAMBOR',
        'DZN': 'DOCENA',
        'DZP': 'DOCENA POR 0**6 ',
        'FOT': 'PIES',
        'FTK': 'PIES CUADRADOS',
        'FTQ': 'PIES CUBICOS',
        'GLI': 'GALON INGLES (4,545956L)',
        'GLL': 'US GALON (3,7843 L)',
        'GRM': 'GRAMO',
        'GRO': 'GRUESA',
        'HLT': 'HECTOLITRO',
        'INH': 'PULGADAS',
        'KGM': 'KILOGRAMO',
        'KT': 'KIT',
        'KTM': 'KILOMETRO',
        'KWH': 'KILOVATIO HORA',
        'LBR': 'LIBRAS',
        'LEF': 'HOJA',
        'LTN': 'TONELADA LARGA',
        'LTR': 'LITRO',
        'MGM': 'MILIGRAMOS',
        'MLL': 'MILLARES',
        'MLT': 'MILILITRO',
        'MMK': 'MILIMETRO CUADRADO',
        'MMQ': 'MILIMETRO CUBICO',
        'MMT': 'MILIMETRO ',
        'MTK': 'METRO CUADRADO',
        'MTQ': 'METRO CUBICO',
        'MTR': 'METRO',
        'MWH': 'MEGAWATT HORA',
        'NIU': 'UNIDAD',
        'ONZ': 'ONZAS',
        'PF': 'PALETAS',
        'PG': 'PLACAS ',
        'PK': 'PAQUETE',
        'PR': 'PAR',
        'RM': 'RESMA',
        'SET': 'JUEGO',
        'ST': 'PLIEGO',
        'STN': 'TONELADA CORTA',
        'TNE': 'TONELADAS',
        'TU': 'TUBOS',
        'UM': 'MILLON DE UNIDADES',
        'YDK': 'YARDA CUADRADA',
        'YRD': 'YARDA',
        'ZZ': 'UNIDAD'
    }
	*/
	
    var _moneda = {
        'USD': '&dollar;',
        'PEN': 'S/',
        'EUR': '&euro;',
        'GBP': '&pound;',
        'JPY': '&yen;',
        'SEK': 'kr',
        'CHF': 'CHF',
        'CAD': 'C&dollar;',
    }
	
    var _monedaDescripcion = {
        'PEN': 'SOLES',
        'EUR': 'EUROS',
        'USD': 'DOLAR AMERICANO',
        'GBP': 'LIBRA ESTERLINA',
        'JPY': 'YEN',
        'SEK': 'CORONA SUECA',
        'CHF': 'FRANCO SUIZO',
        'CAD': 'DOLAR CANADIENSE'
    }
	
    var _tipoProducto = {
        'TI01': 'Bien',
        'TI02': 'Servicio'
    }
	
	var _tipoBeneficio = {
        'TB00': 'Gravado',
        'TB01': 'Exonerado'
    }
    
    var _impuestoICBPER={
        '2019' : '0.10',
        '2020' : '0.20',
        '2021' : '0.30',
        '2022' : '0.40',
        '2023' : '0.50'
    }

    var _itemEditando = false;
    var _DocumentosRelacionadosSchema = {
        selTipoDocumentoRelacionado: "Tipo de Documento",
        txtSerie: "Serie",
        txtNumero: "N&uacute;mero",
        //txtDescripcion: "Descripci&oacute;n"
    }
    var _DocumentosRelacionados = [];
    var _Items = [];
    var _DireccionesReceptor = [];
    var _DireccionesReceptorSchema = {
        "tipo": "Tipo de Domicilio",
        "domicilio": "Domicilio",
    };
    var _direccionSeleccionada = -1;

    var _itemSchema = {};
    var nrusvalue = $("#tributoNrus").val();
   
    if( nrusvalue != "1"){            
        _itemSchema = {
            selTipo: "Tipo",
            selTipoIgv: "Tipo Igv",//GRAVADO O EXONERADO
            txtCantidad: "Cantidad",        
            selUnidadMedida: "Unidad de Medida",
            txtCodigo: "C&oacute;digo",
            txtDescripcion: "Descripci&oacute;n",
            txtValorUnitario: "Valor Unitario",
            txtDescuento: "Descuento",
            txtIGV: "IGV", 
            txtImpICBPER : "ICBPER",       
            txtImporte: "Importe",
        }       
    }else{
        _itemSchema = {
            selTipo: "Tipo",
            selTipoIgv: "Tipo Igv",//GRAVADO O EXONERADO
            txtCantidad: "Cantidad",        
            selUnidadMedida: "Unidad de Medida",
            txtCodigo: "C&oacute;digo",
            txtDescripcion: "Descripci&oacute;n",
            txtValorUnitario: "Valor Unitario",
            txtDescuento: "Descuento",
            txtIGV: "IGV",        
            txtImporte: "Importe",
        }
    }
  
    var _Productos = [];
    var _ProductoSchema = {
        txtCodigo: "C&oacute;digo",
        txtDescripcion: "Descripci&oacute;n",
        selTipo: "Tipo",
        selUnidadMedida: "Unidad de Medida",
        selMoneda: "Moneda",
        txtValorUnitario: "Precio de Venta",
    }
    var _datosEnvio = {}
        /*
         *  :::: HELPERS :::: END
         */
        /*
         *  :::: FUNCTION :::: START
         */
    function renderDocumentoRelacionado() {
        var tbody = $tablaDocumento.find('tbody');
        tbody.empty();
        for (var i in _DocumentosRelacionados) {
            var doc = _DocumentosRelacionados[i];
            var $row = $('<tr/>', {
                'data-row-id': doc.rowId
            });
            for (var k in _DocumentosRelacionadosSchema) {
                var text = doc[k];
                if (k == 'selTipoDocumentoRelacionado') {
                    text = _tipoDocumentoRelacionado[text];
                }
                $('<td/>').html(text).appendTo($row);
            }
            $('<td/>').append($('<button/>').addClass('btn btn-danger btn-sm remover').append($('<i/>').addClass('glyphicon glyphicon-remove'))).appendTo($row);
            $row.appendTo(tbody);
        }
        $("#documentos-relacionados-counter").text(_DocumentosRelacionados.length)
        $hiddenHelperDR.val(_DocumentosRelacionados.length);
        $tablaDocumento.trigger('footable_initialize');
    }

    function agregarDocumentoRelacionado(data) {
        _DocumentosRelacionados.push(data);
        renderDocumentoRelacionado();
    }

    function eliminarDocumentoRelacionado(criteria) {
        _DocumentosRelacionados = _.reject(_DocumentosRelacionados, criteria)
        renderDocumentoRelacionado();
    }

    function editarDocumentoRelacionado(criteria, data) {
        var doc = _.find(_DocumentosRelacionados, criteria)
        doc = _.extend(doc, data);
        renderDocumentoRelacionado();
    }

    function renderItem() {
        var tbody = $tablaItem.find('tbody');
        tbody.empty();
        for (var i in _Items) {
            var doc = _Items[i];
            var $row = $('<tr/>', {
                'data-item-id': doc.itemId
            });
            for (var k in _itemSchema) {
                var text = doc[k];
				console.log("text_"+text);
				if (k == 'selTipoIgv'){
					text = _tipoBeneficio[text];
					console.log("text_tipoBeneficio:"+text);
				}
				if (k == 'selTipo'){
					text = _tipoProducto[text];
				}
                if (k == 'selUnidadMedida') {
					// INICIO PAS20201U210100161
					sessionStorage.clear();
					sessionStorage.setItem("uMedida",text);
					// FIN PAS20201U210100161
					
                    text = _tipoMedida[text];
                }
                //if (k == 'selTipo') continue;
                $('<td/>').html(text).appendTo($row);
            }
            $('<td/>').append($('<button/>').addClass('btn btn-danger btn-sm remover').append($('<i/>').addClass('glyphicon glyphicon-remove'))).appendTo($row);
            $row.appendTo(tbody);
        }
        $("#items-counter").text(_Items.length)
        $modalItem.find('.lista-errores').empty();
        $panelItems.find('.lista-errores').empty();
        $hiddenHelperItem.val(_Items.length);
        $tablaItem.trigger('footable_initialize');
    }

    function agregarItem(data) {
        _Items.push(data);
        renderItem();
    }

    function eliminarItem(criteria) {
        _Items = _.reject(_Items, criteria)
        renderItem();
    }

    function buscarItem(criteria) {
        return _.find(_Items, criteria);
    }

    function editarItem(criteria, data) {
        var doc = buscarItem(criteria);
        doc = _.extend(doc, data);
        renderItem();
    }

    function popularModalItem(data, triggerChange, ignoreCodigo) {
        for (var i in _itemSchema) {
            if (!data.hasOwnProperty(i) || ignoreCodigo && i == 'txtCodigo') continue;
            var el = $formModalItem.find('#' + i);
            el.val(data[i]);
            if (triggerChange) el.trigger('keyup').trigger('change');
        }
        if (data.hasOwnProperty('selMoneda')) {
            var totales = data.selMoneda;
            var divisa = $selMoneda.val()
            if (totales.hasOwnProperty(divisa)) {
                $formModalItem.find('#txtValorUnitario').val(totales[divisa]);
                if (triggerChange) $formModalItem.find('#txtValorUnitario').trigger('keyup').trigger('change');
            }
        }
    }

    function prefetchProductos() {
        $.getJSON('emitirbvsimp.do?action=getCatalogoProductos', function(data) {
            _Productos = data;
            $selMoneda.trigger('focus').trigger('change')
        })
    }

    function filtarProductos(descripcion) {
        var regex = new RegExp(descripcion, "ig");
        return _.filter(_Productos, function (curr) {
            return curr.txtDescripcion.match(regex) !== null;
        });
    }

    function renderProductos(productos) {
        productos = productos || _Productos;
        var tbody = $tablaProducto.find('tbody');
        tbody.empty();
        for (var i in productos) {
            var doc = productos[i];
            var $row = $('<tr/>', {
                'data-p-id': doc.pId
            });
            for (var k in _ProductoSchema) {
                var text = doc[k];
                if (k == 'selUnidadMedida') {
                    text = _tipoMedida[text];
                }
                if (k == 'selTipo') {
                    text = _tipoProducto[text];
                }
                if (k == 'selMoneda') {
                    text = _moneda[text];
                }
                $('<td/>').html(text).appendTo($row);
            }
            $('<td/>').append($('<button/>', {
                type: 'button'
            }).addClass('btn btn-primary btn-sm seleccionar').append($('<i/>').addClass('glyphicon glyphicon-ok'))).append(' ').appendTo($row);
            $row.appendTo(tbody);
        }
        $tablaProducto.trigger('footable_initialize');
    }

    function refrescarResumen() {
		var totalValorGravado = 0;
        var totalValorDescuentos = 0;
        var totalIGV = 0;
        var totalimporteICBPER = 0;
        var totalImporte = 0;    
        _.each(_Items, function (e) {
            
            totalValorGravado +=  parseFloat(e.txtValorUnitario.replace(/,/g, '')) * parseFloat(e.txtCantidad.replace(/,/g, ''))  || 0;            
            totalValorDescuentos += parseFloat(e.txtDescuento.replace(/,/g, '')) || 0;
            totalIGV += parseFloat(e.txtIGV.replace(/,/g, '')) || 0;
            totalimporteICBPER += parseFloat( e.txtImpICBPER != undefined ? e.txtImpICBPER.replace(/,/g, '') : 0) || 0;
            totalImporte += parseFloat(e.txtImporte.replace(/,/g, '')) || 0;
                       
        });        
        $lblTotalVentaGravado.text(totalValorGravado.toMoney(2));
        $lblTotalValorDescuentos.text(totalValorDescuentos.toMoney(2));
        $lblTotalTotalIGV.text(totalIGV.toMoney(2));
        $lblTotalImporteICBPER.text(totalimporteICBPER.toMoney(2));
        $lblTotalImporteTotal.text(totalImporte.toMoney(2));
    }

    function renderDireccionesReceptor() {
        var tbody = $tablaDireccionesReceptor.find('tbody');
        tbody.empty();
        for (var i in _DireccionesReceptor) {
            var direccion = _DireccionesReceptor[i];
            var $row = $('<tr/>', {
                'data-row-id': direccion.codigo
            });
            $('<td/>').append($('<button/>').addClass('btn btn-primary agregar-nuevo').append($('<i/>').addClass('glyphicon glyphicon-ok'))).appendTo($row);
            for (var k in _DireccionesReceptorSchema) {
                var text = direccion[k];
                $('<td/>').html(text).appendTo($row);
            }
            $row.appendTo(tbody);
        }
        $tablaDireccionesReceptor.trigger('footable_initialize');
    }

    function validarExistenciaRUC() {
        var formData = {
            txtRUC: $RUCField.val()
        };
        var url = 'emitirbvsimp.do?action=validarExistenciaRucCliente';
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.estado == '0') {
                    $RUCField.data('pivot-valid', '0');
                    $razonSocial.closest('.form-group').addClass('hidden');
                    $btnValidarDatosReceptor.removeClass('hidden');
                    $btnContinuar.addClass('hidden');
                    alert('El ruc ingresado no existe');
                    return;
                }
                if (data.estado == '2') {
                    alert('El ruc ingresado no esta activo');
                    return;
                }
                if (data.estado == '3') {
                    alert('El ruc ingresado no esta habido');
                    return;
                }
                if (data.estado == '4') {
                    $RUCField.data('pivot-valid', '0');
                    alert('El ruc ingresado es el mismo del emisor');
                    $razonSocial.closest('.form-group').addClass('hidden');
                    $btnValidarDatosReceptor.removeClass('hidden');
                    $btnContinuar.addClass('hidden');
                    return;
                }
                if (data.estado == '5') {
                    $RUCField.data('pivot-valid', '0');
                    alert('Su Cliente no cuenta con clave SOL.'); // PAS20221U210600185
                    $razonSocial.closest('.form-group').addClass('hidden');
                    $btnValidarDatosReceptor.removeClass('hidden');
                    $btnContinuar.addClass('hidden');
                    return;
                }
                $razonSocial.val(data.razon_social).closest('.form-group').removeClass('hidden');
                $RUCField.data('pivot-valid', '1');
                _DireccionesReceptor = data.items;
                $btnContinuar.removeClass('hidden');
                $btnValidarDatosReceptor.addClass('hidden');
            },
            error: function () {
                $RUCField.data('pivot-valid', '0');
                $razonSocial.closest('.form-group').addClass('hidden');
                $btnValidarDatosReceptor.removeClass('hidden');
                $btnContinuar.addClass('hidden');
            },
            complete: function () {
                $modalPreloader.modal('hide');
                $formBoletaDatosReceptor.valid();
            }
        });
    }

    function validarExistenciaDNI() {
        var formData = {
            txtDocumento: $RUCField.val()
        };
        var url = 'emitirbvsimp.do?action=validarExistenciaDNICliente';
        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.estado == "0") {
                    $RUCField.data('pivot-valid', '0');
                    alert('El dni ingresado no existe');
                    return;
                }
                $razonSocial.val(data.razon_social).closest('.form-group').removeClass('hidden');
                $RUCField.data('pivot-valid', '1');
                $btnContinuar.removeClass('hidden');
                $btnValidarDatosReceptor.addClass('hidden');
            },
            error: function () {
                $RUCField.data('pivot-valid', '0');
                $razonSocial.closest('.form-group').addClass('hidden');
                $btnValidarDatosReceptor.removeClass('hidden');
                $btnContinuar.addClass('hidden');
            },
            complete: function () {
                $modalPreloader.modal('hide');
                $formBoletaDatosReceptor.valid();
            }
        });
    }

    function formatFecha(x) {
        if (!x instanceof Date) throw new Error('not-a-date')
        var day = x.getDate()
        day = day < 10 ? '0' + day : day;
        var month = x.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var year = x.getFullYear()
        return [day, month, year].join('/');
    }

    function prepararDatosPreview() {
        var d = new Date();
        var retObj = {
            preview: {
                titulo: (function () {
                    return $selTipoDoc.length > 0 ? "Boleta de Venta Electr&oacute;nica" : "Boleta Electr&oacute;nica"
                })()
            },
            emisor: {
                ruc: $hiddenRucEmisor.val(),
                tipoDoc: $selTipoDoc.length == 0 ? "6" : $selTipoDoc.val(),
                direccion: $hiddenDireccionEmisor.val(),
                razon_social: $hiddenRazonSocialEmisor.val(),
                nombre_comercial: $hiddenNombreComercialEmisor.val(),
                departamento: $hiddenDepartamentoEmisor.val(),
                nrus:   $hiddenNrus.val()
            },
            boleta: {
                //fecha_emision: formatFecha(new Date),				
				fecha_emision: $txtFechaEmision.val(),
                nombres: $txtRazonSocial.val(),
                ruc: $RUCField.val(),
                numeroDocumento: $RUCField.val(),
                tipoDocumento: $selTipoDoc.val(),
                moneda_iso: $selMoneda.val(),
                direccion_entrega: $txtLugarEntrega.val(),
                total_gravado: $('#total-valor-venta-gravado').text(),
                total_descuentos: $('#total-valor-descuentos').text(),
                total_igv: $('#total-igv').text(),
                total_importe: $('#importe-total').text(),             
                importe_icbper: $('#importe-icbper').length > 0 ? $('#importe-icbper').text() : 0,
                txtIndicador: $('#txtIndicador').val()
            },
            documentos_relacionados: _DocumentosRelacionados,
            items: _Items
        };
        var retObj2 = {
            emisor: {
                ruc: $hiddenRucEmisor.val(),
                tipoDoc: $selTipoDoc.length == 0 ? "6" : $selTipoDoc.val(),
                direccion: $hiddenDireccionEmisor.val(),
                razon_social: $hiddenRazonSocialEmisor.val(),
                nombre_comercial: $hiddenNombreComercialEmisor.val(),
                departamento: $hiddenDepartamentoEmisor.val(),
                fecha_vencimiento: $txtFechaVencimiento.val(),
                nrus:   $hiddenNrus.val()
            },
            boleta: {
                //fecha_emision: formatFecha(new Date),
				fecha_emision: $txtFechaEmision.val(),
                nombres: $txtRazonSocial.val(),
                numeroDocumento: $RUCField.val(),
                tipoDocumento: $selTipoDoc.val(),
                moneda_iso: $selMoneda.val(),
                direccion_entrega: $txtLugarEntrega.val(),
                total_gravado: ($('#total-valor-venta-gravado').text()).replace(',', ''),
                total_descuentos: ($('#total-valor-descuentos').text()).replace(',', ''),
                total_igv: ($('#total-igv').text()).replace(',', ''),                  
                importe_icbper: $('#importe-icbper').length > 0 ? ($('#importe-icbper').text()).replace(',','') : 0,
                txtIndicador: ($('#txtIndicador').val()).replace(',', ''),
				igv: $("#igvPorcentajeGlobal").val(),
            },
            documentos_relacionados: _DocumentosRelacionados,
            items: _Items
        };
		
		retObj.boleta.valorIgv = Math.floor( $("#igvPorcentajeGlobal").val() );
		console.log("valorIgv");
		console.log(retObj.boleta.valorIgv);
		
		
        retObj.emisor.tipoDoc_val = _tipoDocumentoIdentidad[retObj.emisor.tipoDoc]
        retObj.documentos_relacionados = _.map(retObj.documentos_relacionados, function (doc) {
            doc.selTipoDocumentoRelacionado_val = _tipoDocumentoRelacionado[doc.selTipoDocumentoRelacionado]
            return doc;
        });
        retObj.items = _.map(retObj.items, function (i) {
            i.selUnidadMedida_val = _tipoMedida[i.selUnidadMedida]
			i.selTipo_val = _tipoProducto[i.selTipo]
			//i.selTipoIgv_val = i.selTipoIgv
			i.selTipoIgv_val = _tipoBeneficio[i.selTipoIgv] //
            return i;
        });
        retObj.boleta.moneda_simbolo = encodeURIComponent(_moneda[retObj.boleta.moneda_iso]);
        retObj.boleta.moneda = _monedaDescripcion[retObj.boleta.moneda_iso];
        _datosEnvio = retObj2;
		console.log(retObj2);
		console.log(retObj);
        return retObj;
    }

    function showPreview() {

        $modalPreloader.modal('show');
        var data = prepararDatosPreview();
		console.log("data_"+data.selTipoIgv);//frank
		console.log("data"+data.selTipoIgv_val);
        $('#root-panels').addClass('hidden');
        $("#panel-preview").removeClass('hidden');
        $.get('boleta-xhr.html').success(function (rtext) {
            var tpl = _.template(rtext)
            var parsed = tpl(data)

            $("#preview-boleta").html(parsed).find('table').footable();
             $modalPreloader.modal('hide');
        })
    }
	
    /* Inicio PAS20211U210100008 */
    function remove(number_) {
        var allowDecimals = 10;
        if (isNaN(number_)){
            return;
        }
        number_= number_.toString();
        for (var i=-8; i<=-1; i++){
            var zerosString = "";
            for (var j=1; j<=Math.abs(i); j++){
                zerosString = zerosString + "0";
            }
            if (number_.substr(i) == zerosString){
                number_ = parseFloat(number_).toFixed(allowDecimals - Math.abs(i));
                return number_;
                break;
            }
        }
        number_ = parseFloat(number_).toFixed(10);
        return number_;
    }

    function removeValorUnitario(number_) {
        var allowDecimals = 10;
        if (isNaN(number_)){
            return;
        }
        number_= number_.toString();
        for (var i=-8; i<=-1; i++){
            var zerosString = "";
            for (var j=1; j<=Math.abs(i); j++){
                zerosString = zerosString + "0";
            }
            if (number_.substr(i) == zerosString){
                number_ = Math.abs(i);
                return number_;
                break;
            }
        }
        number_ = 0;
        return number_;
    }
    /* Fin PAS20211U210100008 */
	
	function round(num, decimals) {
		var n = Math.pow(10, decimals);
        //return remove(parseFloat(Math.round((n * num).toFixed(decimals))/n).toFixed(10));
		return Math.round((n * num).toFixed(decimals))/n;
	}
	
    /*
     *  :::: FUNCTION :::: END
     */
    /*
     *  :::: SETUP :::: START
     */
    $tablaDocumento.footable();
    $tablaItem.footable();
    $tablaProducto.footable();
    $tablaDireccionesReceptor.footable();
    $('.modal').on('shown.bs.modal', function () {
        $(this).find('.footable').trigger('footable_initialize');
    })
    $modalDirecciones.on('click', '.agregar', function (e) {
        var direccion = $(this).attr('data-address');
        var indicador = $(this).attr('data-tipo');
        $txtLugarEntrega.val(direccion);
        $txtIndicador.val(indicador);
        $modalDirecciones.modal('hide');
    });
    $modalDirecciones.on('click', '.agregar-nuevo', function (e) {
        _direccionSeleccionada = $(this).closest('tr').attr('data-row-id');
        var direccion = _.find(_DireccionesReceptor, {
            codigo: _direccionSeleccionada
        })
        $txtLugarEntrega.val(direccion.domicilio);
        $modalDirecciones.modal('hide');
    });
    $tablaDocumento.on('click', 'button.remover', function (e) {
        var rowId = $(e.target).closest('tr').attr('data-row-id');
        eliminarDocumentoRelacionado({
            rowId: rowId
        });
    })
    $tablaItem.on('click', 'button.remover', function (e) {
        var rowId = $(e.target).closest('tr').attr('data-item-id');
        eliminarItem({
            itemId: rowId
        });
        refrescarResumen();
    })
    $tablaItem.on('click', 'button.editar', function (e) {
        var rowId = $(e.target).closest('tr').attr('data-item-id');
        var currItem = buscarItem({
            itemId: rowId
        });
        _itemEditando = currItem.itemId;
        popularModalItem(currItem);
        $modalItem.modal('show');
    })
    $btnOpenModalDR.on('click', function () {
        $formModalDocumentoRelacionado.find('.alert').remove();
        $formModalDocumentoRelacionado.find('.has-error').removeClass('has-error');
        $formModalDocumentoRelacionado.find(':input').val('');
        $modalDocumentoRelacionado.modal('show');
    })
    $btnOpenModalItem.on('click', function () {
        if (_Items.length >= 10) {
            alert('Se permite un limite de 10 items');
            return;
        }
        _itemEditando = false;
        $formModalItem.find('.alert').remove();
        $formModalItem.find('.has-error').removeClass('has-error');
        $formModalItem.find(':input').val('');
        //$formModalItem.find('#txtCantidad').val((1).toMoney(9, ''));
        $formModalItem.find('#txtCantidad').val((1).toMoney(2, ''));
        //$formModalItem.find('#txtCantidad').attr('readonly', 'readonly');
        $formModalItem.find('#txtDescuento').val('0.00');
        $formModalItem.find('#rdgGravado').prop('checked', true);
        $formModalItem.find('#subTipoIgv00').prop('checked', true);
		$('#rdgExonerado').prop('disabled', false);
		
		// INICIO PAS20201U210100161
		if(_Items.length == 0){
			$formModalItem.find('#selUnidadMedida').val('NIU');
		} else {
			$formModalItem.find('#selUnidadMedida').val(sessionStorage.getItem("uMedida"));
		}	
		// FIN PAS20201U210100161
        initICBPER();

        $modalItem.modal('show');
    });
    $btnOpenModalSearch.on('click', function () {
        renderProductos();
        $modalSearch.modal('show');
    });
    $txtProductQuery.on('keyup', function (e) {
        var query = $txtProductQuery.val();
        var productos = filtarProductos(query);
        renderProductos(productos);
    });
    $tablaProducto.on('click', 'button.seleccionar', function (e) {
        var pid = $(e.target).closest('tr').attr('data-p-id');
        var producto = _.find(_Productos, {
            pId: pid
        });
        $formModalItem.find('#txtDescripcion').val(producto.txtDescripcion);
        $modalSearch.modal('hide');
    })
    $('[data-format-numeric]').on('change', function (e) {
		var $self = $(this);
        //var places = $self.attr('data-decimal-places') || 10; /* PAS20211U210100008 */
		var num_decimals = 10 - removeValorUnitario(parseFloat($(this).numVal()).toFixed(10)); /* PAS20211U210100008 */
        var places = $self.attr('data-decimal-places') || num_decimals; /* PAS20211U210100008 */
        var groupDelimiter = $self.attr('data-group-delimiter') || undefined;
        e.target.value = $(this).numVal().toMoney(places, groupDelimiter);
    });
	
	$("input[name='rdgTipoIgv']").change(function () {		
		var cantidad = $formModalItem.find('#txtCantidad').numVal();
		var valorUnidad = $formModalItem.find('#txtValorUnitario').numVal();
		var descuento = $formModalItem.find('#txtDescuento').numVal();
		var $igv = $formModalItem.find('#txtIGV');
		var $selTipoIgv = $formModalItem.find('#selTipoIgv');
		var $importe = $formModalItem.find('#txtImporte');
		var subtotal = (cantidad * valorUnidad) - descuento;
		//Cambio NS
		/*if( $('#subTipoIgv01').is(':checked') ){
			console.log("Porcentaje 10");
			$("#igvPorcentajeGlobal").val("10");
		}else{
			console.log("Porcentaje 18");
			$("#igvPorcentajeGlobal").val("18");
		}*/
		//Fin Cambio NS
		var impuesto = $("#igvPorcentajeGlobal").val() * 0.01 * subtotal;					
        
        var importeICBPER = $formModalItem.find('#txtImpICBPER').length > 0 ?   $formModalItem.find('#txtImpICBPER').numVal() : 0;

		if ( $('#rdgGravado').is(':checked') ){
			console.log("1 rdgGravado");
			var total = impuesto + subtotal +importeICBPER;
			//$igv.val(impuesto.toFixed(2)); /* PAS20211U210100008 */
			impuesto = parseFloat(impuesto).toFixed(10); /* PAS20211U210100008 */
			console.log("impuesto -----> " + impuesto); /* PAS20211U210100008 */
			$igv.val(remove(impuesto)); /* PAS20211U210100008 */
			//$selTipoIgv.val("Gravado");
			$selTipoIgv.val("TB00");
		}else if ( $('#rdgExonerado').is(':checked') ){
			console.log("2 rdgExonerado");
			var total = subtotal +importeICBPER;
			$igv.val("0.00");
			//$selTipoIgv.val("Exonerado");
			$selTipoIgv.val("TB01");
		}

		total = parseFloat(total).toFixed(10); /* PAS20211U210100008 */
		console.log("total ---> " + total); /* PAS20211U210100008 */
        //var total = impuesto + subtotal;
        //$igv.val(impuesto.toFixed(2));
		
        //$importe.val(total.toFixed(2)); /* PAS20211U210100008 */
		$importe.val(remove(total)); /* PAS20211U210100008 */		
	});
    
    
    $("input[name='rdgICBPER']").change(function () {
        var cantidad = $formModalItem.find('#txtCantidad').numVal();
        
        if ($('#rdgICBPERsi').is(':checked')) {/* PAS20211U210100008 */
            $formModalItem.find('#txtCantidad').val(Math.trunc(cantidad));/* PAS20211U210100008 */
            cantidad = $formModalItem.find('#txtCantidad').numVal();/* PAS20211U210100008 */
        }
        
        var valorUnidad = $formModalItem.find('#txtValorUnitario').numVal();
        var descuento = $formModalItem.find('#txtDescuento').numVal();
        var $igv = $formModalItem.find('#txtIGV');
        var $selTipoIgv = $formModalItem.find('#selTipoIgv');
        var $importe = $formModalItem.find('#txtImporte');
        var subtotal = (cantidad * valorUnidad) - descuento;
        var impuesto = $("#igvPorcentajeGlobal").val() * 0.01 * subtotal;
        impuesto = parseFloat(impuesto).toFixed(10);/* PAS20211U210100008 */
        $igv.val(remove(impuesto));/* PAS20211U210100008 */
        var $ICBPER = $formModalItem.find('#txtICBPER');
        var $impuestoICBPER = $formModalItem.find('#txtImpICBPER');
        var impuestoTotalICBPER = cantidad * impuestoICBPER();
    
        if ($('#rdgGravado').is(':checked')) {
            //var total = impuesto + subtotal; /* PAS20211U210100008 */
        	var total = parseFloat(impuesto) + parseFloat(subtotal);
        } else if ($('#rdgExonerado').is(':checked')) {
            //var total = subtotal; /* PAS20211U210100008 */
        	var total = parseFloat(subtotal); /* PAS20211U210100008 */
			//Cambio NS
			var $igv = $formModalItem.find('#txtIGV');
			$igv.val("0.00");
        }
    
        if ($('#rdgICBPERsi').is(':checked')) {
            if ($txtFechaEmision.val().length > 0) {
                    
                var fecEmision = $formComprobante.find('#txtFechaEmision').val().split("/");
                var fecEmisionValue = new Date(fecEmision[2], fecEmision[1] - 1, fecEmision[0]);
                var fecVigencia = $formComprobante.find('#fecVigencia').val().split("/");
                var fecVigenciaValue = new Date(fecVigencia[2], fecVigencia[1] - 1, fecVigencia[0]);
    
                if (fecEmisionValue < fecVigenciaValue) {
                    var fecmsg = fecVigencia[0] + "/" + fecVigencia[1] + "/" + fecVigencia[2];
                    var msg = "ICBPER es invalido en comprobantes inferiores a la fecha " + fecmsg + ".";
                    alert(msg);
                    $formModalItem.find("#rdgICBPERno").prop('checked', true);
                    return false;
                } else {
                    //total = total + impuestoTotalICBPER; /* PAS20211U210100008 */
                    //$impuestoICBPER.val(impuestoTotalICBPER.toFixed(2)); /* PAS20211U210100008 */
                    $formModalItem.find('#txtCantidad').val(Math.trunc(cantidad)); /* PAS20211U210100008 */
                    cantidad = $formModalItem.find('#txtCantidad').numVal(); /* PAS20211U210100008 */
                    console.log("cantidad --> " + cantidad);
                    //impuestoTotalICBPER = cantidad * impuestoICBPER(); /* PAS20211U210100008 */
                    //total = total + impuestoTotalICBPER; /* PAS20211U210100008 */
                    impuestoTotalICBPER = parseFloat(cantidad) * impuestoICBPER(); /* PAS20211U210100008 */
                    total = total + parseFloat(impuestoTotalICBPER); /* PAS20211U210100008 */
                    $impuestoICBPER.val(impuestoTotalICBPER.toFixed(2)); /* PAS20211U210100008 */
                    if ($selMoneda.val() != 'PEN') {
                        $impuestoICBPER.removeAttr('readonly');
                        $impuestoICBPER.val("");
                        total = total - impuestoTotalICBPER;
                    } else {
                        $ICBPER.val(impuestoICBPER());
                    }
                }
            } else {
                alert("Ingresar la fecha de emisión para el impuesto de bolsas plásticas");
                $formModalItem.find("#rdgICBPERno").prop('checked', true);
                return false;
            }                
        } else if ($('#rdgICBPERno').is(':checked')) {
            total = total;
            $impuestoICBPER.val("0.00");
            $ICBPER.val("0.00");
            $impuestoICBPER.attr('readonly', 'readonly')
        }    
        //INI PAS20211U210100007
        //$importe.val(total.toFixed(2));
        $importe.val(total.toFixed(10));
        //FIN PAS20211U210100007
    });
    


    $('.calculate-total').bind('change keyup', function (e) {
		calcularTotalIGV();
    });
    $('.calculate-from-importe').on('keyup', function (argument) {
		var $igv = $formModalItem.find('#txtIGV');
        var $importe = $formModalItem.find('#txtImporte');
        var $valorUnitario = $formModalItem.find('#txtValorUnitario');
        var cantidad = $formModalItem.find('#txtCantidad').numVal();
        var importe = $formModalItem.find('#txtImporte').numVal();
        var descuento = $formModalItem.find('#txtDescuento').numVal();
        //var valorUnidad = ((importe / 1.18) + descuento) / cantidad;

        var importeICBPER = $formModalItem.find('#txtImpICBPER').numVal();   
        if ($('#rdgICBPERsi').is(':checked')) {                          
            if ($selMoneda.val() != 'PEN') {                             
                importe = importe - importeICBPER;
            }
        }  
        
		var valorUnidad = ( ( importe / ( ( $("#igvPorcentajeGlobal").val() * 0.01 ) +1 ) ) + descuento ) / cantidad;
        var subtotal = (cantidad * valorUnidad) - descuento;
        //var impuesto = 0.18 * subtotal;
		var impuesto = $("#igvPorcentajeGlobal").val() * 0.01 * subtotal;
        //var total = impuesto + subtotal;
		
		if ( $('#rdgGravado').is(':checked') ){
			console.log("1 rdgGravado");
			var total = impuesto + subtotal;
			$igv.val(impuesto.toMoney(2));							 
		}else if ( $('#rdgExonerado').is(':checked') ){
			console.log("2 rdgExonerado");
			var total = subtotal;
			$igv.val("0.00");
		}

        $valorUnitario.val(valorUnidad.toMoney(2));
        //$igv.val(impuesto.toMoney(2));
    })
    $txtCodigo.add($txtDescripcion).on('typeahead:select', function (e, s) {
        var producto = _.find(_Productos, {
            txtCodigo: s.txtCodigo
        });
        if (producto) popularModalItem(producto, true, false);
    });
    $("#selTipo").on('change', function (e) {
        if (e.target.value == 'TI02') {            
            $('#txtCantidad').val("1.00").attr('readonly', 'readonly');                        
                       
        } else {
            $('#txtCantidad').removeAttr('readonly');
        }
    })
    var _CURR_DATE_PICKER = null;
    $('.datepicker').on('click', function (e) {
        ImpuestoBolsasFecha(e);        
    })
    $datepicker.datepicker({
        ////endDate: new Date(),
        ////startDate: new Date()
		endDate: new Date(),
        //startDate: new Date()
		startDate: '-2d'
    }).on('changeDate', function (e) {
        $datepickerHidden.val(e.format());
    });
    $btnCloseDatepicker.on('click', function (e) {
        var selectedDate = $datepickerHidden.val();
        _CURR_DATE_PICKER.val(selectedDate).trigger('change');
        $datepickerHidden.val('');
        _CURR_DATE_PICKER = null;
        $modalDatepicker.modal('hide');
    });
    _.each(_tipoMedida, function (v, k) {
        $('<option/>', {
            value: k
        }).html(v).appendTo($selUnidadMedida);
    })
    _.each(_tipoProducto, function (v, k) {
        $('<option/>', {
            value: k,
            selected: (k == 'TI01')
        }).html(v).appendTo($selTipo);
    })
	_.each(_tipoBeneficio, function(v, k) {
		$('<option/>', {
			value: k,
			selected:(k=='TB00')
		}).html(v).appendTo($selTipoIgv);
	})
    _.each(_monedaDescripcion, function (v, k) {
        $('<option/>', {
            value: k,
            selected: (k == 'PEN')
        }).html(v).appendTo($selMoneda);
    })
    _.each(_tipoDocumentoRelacionado, function (v, k) {
        $('<option/>', {
            value: k
        }).html(v).appendTo($selTipoDocumentoRelacionado);
    })
    var ProductoCodigoBH = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('txtCodigo', 'txtDescripcion'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: [],
        identify: function (obj) {
            return obj.txtCodigo;
        },
    });
    $txtCodigo.typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: 'codigos',
        source: ProductoCodigoBH,
        templates: {
            suggestion: function (e) {
                var par = $('<div/>')
                $('<em/>').text(e.txtCodigo).appendTo(par);
                par.append(' - ');
                $('<span/>').text(e.txtDescripcion).appendTo(par);
                return par;
            }
        },
        display: 'txtCodigo'
    });
    $txtDescripcion.typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: 'codigos',
        source: ProductoCodigoBH,
        templates: {
            suggestion: function (e) {
                var par = $('<div/>')
                $('<em/>').text(e.txtCodigo).appendTo(par);
                par.append(' - ');
                $('<span/>').text(e.txtDescripcion).appendTo(par);
                return par;
            }
        },
        display: 'txtDescripcion'
    });
    $('.tt-query').css('background-color', '#fff');
    $RUCField.on('change', function () {
        $btnContinuar.addClass('hidden');
        $btnValidarDatosReceptor.removeClass('hidden');
        $RUCField.data('pivot-valid', '1');
        if ($selTipoDoc.length > 0) {
            if ($selTipoDoc.val() == '1') $formBoletaDatosReceptor.valid();
            else $formBoletaDatosReceptor.valid();
        }
    });
    $btnContinuar.on('click', function () {
        $btnContinuar.addClass('hidden');
        $RUCField.attr('disabled', 'disabled')
        $razonSocial.attr('disabled', 'disabled')
        $selTipoDoc.attr('disabled', 'disabled')
        $RUCField.attr('disabled', 'disabled')
        $panelBoletaDatosReceptor.find('.panel-collapse').collapse('hide');
        $panelDatosComprobante.removeClass('hidden').find('.panel-collapse').collapse('show');
        $panelDatosComprobante.removeClass('hidden').find('.panel-collapse').collapse('show');
        $panelDocumentosRelacionados.removeClass('hidden').find('.panel-collapse').collapse('show');
        $panelItems.removeClass('hidden').find('.panel-collapse').collapse('show');
        $panelResumen.removeClass('hidden').find('.panel-collapse').collapse('show');
        $("#buttons").removeClass('hidden');
        renderDireccionesReceptor();
        prefetchProductos();
        renderDocumentoRelacionado()
        renderItem();
        refrescarResumen();
    });
    $selMoneda.on('focus', function (e) {
        $(this).attr('data-previous', this.value)
    });
   

    $selMoneda.on('change', function (evt) {
        var prev = $(this).attr('data-previous')
        
        if(_Items.length > 0 && this.value != prev){
            alert('No puede cambiar de moneda, existe items agregados');
            this.value = prev;
            return;
        }


        else {

      $(".simbolo-moneda").html( _moneda[this.value] )
      ProductoCodigoBH.clear();
        var filtered = _.filter(_Productos, function(e){
            return _.has(e.selMoneda, evt.target.value)
        })
      ProductoCodigoBH.add(filtered);

      }


    })



    $btnMostrarModalItems.on('click', function (e) {
        if (!$selMoneda.val()) {
            alert('Seleccione la Moneda');
            return;
        }
        $modalListaItems.modal('show');
    });
    $btnMostrarModalDR.on('click', function (e) {
        $modalListaDocumentoRelacionado.modal('show');
    });
    
    
    $btnPreview.on('click', function (e) {
		console.log($("#igvPorcentajeGlobal").val());
        if (($selTipoDoc.val() == '-') && ($selMoneda.val() == 'PEN') && (total_venta > 700)) {
            alert('Debe ingresar el tipo y numero de documento del receptor si el importe total es superior a S/.700 o equivalente');
            window.location.href = "emitirbvsimp.do";
        }
        else {
			
			
			
            if (!$formComprobante.valid()) return;
            if (!$formItem.valid()) return;
			console.log($("#igvPorcentajeGlobal").val());
            showPreview();          
        }
    })


    $btnVolverBoleta.on('click', function (e) {
        $('#root-panels').removeClass('hidden')
        $("#panel-preview").addClass('hidden');
    })
    $btnEmitirBoleta.on('click', function (e) {        
        /// quickfix 15-10-2015
        if (!confirm('\u00BFEsta seguro de emitir su comprobante?')) {
            return;
        }

        $btnEmitirBoleta.prop('disabled', true);
        $modalPreloader.modal('show');
        
		console.log("Datos a enviar");
		console.log(_datosEnvio);
		console.log("igvPorcentajeGlobal");
		console.log($("#igvPorcentajeGlobal"));
		console.log($("#igvPorcentajeGlobal").val());
		
        var url = "emitirbvsimp.do?action=grabarComprobante";
        $.ajax({
            data: {
                variable: JSON.stringify(_datosEnvio),
            },
            method: 'post',
            //contentType: "application/text; charset=UTF-8",
            dataType: 'json',
            url: url,
        }).done(function (data, textStatus, jqXHR) {
            if (console && console.log) {
                console.log("La solicitud se ha completado correctamente.");
                $modalPreloader.modal('hide');
                window.location.href = "emitirbvsimp.do?action=mostrarBoletaGenerada";
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            if (console && console.log) {
                console.log("La solicitud a fallado: " + textStatus);
            }
			$modalPreloader.modal('hide');
			$btnEmitirBoleta.prop('disabled', false);
			alert('Se presentó un inconveniente al emitir el comprobante. Verifique las consultas. Inténtelo en unos minutos.');
            return;
        });
    })
    $selTipoDocumentoRelacionado.on('change', function (e) {
        $txtSerie.parent().toggleClass('hidden', e.target.value == '00')
    })

    $selTipoDoc.on('change', function (e) {

        $razonSocial.parent().toggleClass('hidden', this.value == '1' || this.value == '6')

        $RUCField.attr('maxlength', this.value == '1' ? 8 : 15)     
        $RUCField.attr('maxlength', this.value == '6' ? 11 : 15)     
        $RUCField.val('');
        if(e.target.value == '1' || e.target.value == '6')
            $txtRazonSocial.attr('readonly', 'readonly')
        else
            $txtRazonSocial.removeAttr('readonly')

        if ($selTipoDoc.val() == '-'){
            $RUCField.val('-')
            $RUCField.attr('readonly', 'readonly')
        }else{
            $RUCField.removeAttr('readonly')
            $RUCField.val('')
        }
    })

        /*
         *  :::: SETUP :::: END
         */
        /*
         *  :::: Form Validate :::: START
         */
    $formCatalogo.validate(_.extend(window._validatorWallSettings, {
        debug: true,
        rules: {
            txtCodigo: {
                required: true,
                minlength: 11
            },
            txtDescripcion: {
                required: true
            }
        },
        // estos mensajes estan aqui porque son d&iacute;n&aacute;micos respecto al html
        messages: {
            txtCodigo: "Ingrese el codigo",
            txtDescripcion: "Ingrese la descripcion"
        },
        submitHandler: function (form) {
            form.submit();
            /*
            var url = '';
            $.ajax({
              method: 'post',
              dataType: 'json',
              complete: function () {
                window.location.href = "tabla-resultado.html"
              }
            })

            */
        }
    }));
    $formModalDocumentoRelacionado.validate(_.extend(window._validatorWallSettings, {
        debug: true,
        rules: {
            selTipoDocumentoRelacionado: {
                required: true,
            },
            txtSerie: {
                required: function () {
                    return $selTipoDocumentoRelacionado.val() != '00'
                },
            },
            txtNumero: {
                required: true,
                maxlength: 10
            },
            txtDescripcion: {
                required: false,
            },
        },
        // estos mensajes estan aqui porque son d&iacute;n&aacute;micos respecto al html
        messages: {
            selTipoDocumentoRelacionado: {
                required: 'Seleccione el tipo de documento'
            },
            txtSerie: {
                required: 'Ingrese la Serie'
            },
            txtNumero: {
                required: 'Ingrese el numero'
            },
            txtDescripcion: {
                required: 'Ingrese la Descripci&oacute;n'
            },
        },
        submitHandler: function (form) {
            /// START eliminacion de duplicados //////
            var data = $(form).first().serializeObject();
            var criteria = {
                selTipoDocumentoRelacionado: data.selTipoDocumentoRelacionado,
                txtNumero: data.txtNumero
            };
            if (data.selTipoDocumentoRelacionado == '00') {
                criteria.txtSerie = data.txtSerie;
            }
            duplicated = !!_.findWhere(_DocumentosRelacionados, criteria);
            if (duplicated) {
                alert('El registro ya ha sido ingresado');
                return;
            }
            /// END eliminacion de duplicados //////
            data.rowId = _.uniqueId('dr-');
            agregarDocumentoRelacionado(data);
            $modalDocumentoRelacionado.modal('hide');
        }
    }))

    $formModalItem.validate(_.extend(window._validatorWallSettings, {
        debug: true,
        rules: {
            txtCantidad: {
                required: true,
                moreThan: 0,
                digits: {
                    depends: function() {
                        if ($('#rdgICBPERsi').is(':checked')) {                          
                            var cantidad = $formModalItem.find('#txtCantidad').numVal();                           
                            var dato =cantidad.toString();                                           
                            var arg =dato.split(".");                           
                            if(arg.length != 1 ){                              
                                return true;
                            }else{                               
                                return false;
                            }
                        } else {
                            return false;
                        }                
                    }
                }  
            },
            selUnidadMedida: {
                required: true,
            },
            txtCodigo: {
                required: true,
                maxlength: 15
            },
            txtDescripcion: {
                required: true,
                maxlength: 200,
            },
            txtValorUnitario: {
                required: true,
                moreThan: 0
            },
            txtImporte: {
                moreThan: 0
            },
            //txtIGV: {
            //    moreThan: 0
            //},
            txtDescuento: {
                required: false
            },
            selTipo: {
                required: true,
            },
            txtImpICBPER: {
                required :{
                    depends : function(){
                        if ($selMoneda.val() != 'PEN') {
                                return true;
                        }else {
                            false;
                        }
                    }
                },
                min:{
                    depends: function(){                         
                        if ($('#rdgICBPERsi').is(':checked')) {                          
                            if ($selMoneda.val() != 'PEN') {                             
                                return 0;
                            }
                        }                        
                    }
                }
            }

        },
        // estos mensajes estan aqui porque son d&iacute;n&aacute;micos respecto al html
        messages: {
            txtCantidad: {
                required: 'Ingrese la Cantidad',
                moreThan: 'La cantidad debe ser mayor a 0',
                digits: 'La cantidad debe ser un valor entero' 
            },
            selUnidadMedida: {
                required: 'Seleccione Unidad de Medida',
            },
            txtCodigo: {
                required: 'Ingrese el C&oacute;digo',
            },
            txtDescripcion: {
                required: 'Ingrese la Descripci&oacute;n',
            },
            txtValorUnitario: {
                required: 'Ingrese el Valor Unitario',
                moreThan: 'El valor del precio unitario no es  v&aacute;lido'
            },
            txtDescuento: {
                required: 'El descuento es requerido',
                moreThan: 'El valor del descuento no es  v&aacute;lido'
            },
            /*txtIGV: {
                required: 'El Igv es requerido',
                moreThan: 'El valor del igv no es  v&aacute;lido'
            },*/
            txtImporte: {
                required: 'El Importe es requerido',
                moreThan: 'El valor del importe no es  v&aacute;lido'
            },
            selTipo: {
                required: 'Seleccione el Tipo de Servicio',
            },
            txtImpICBPER: {
                required: 'El Importe ICBPER es requerido',
                min: 'El valor del importe ICBPER no es v&aacute;lido'
               
            }
        },
        submitHandler: function (form) {
            var data = $(form).last().serializeObject();
            if (_itemEditando) {
                editarItem({
                    itemId: _itemEditando
                }, data);
            } else {
                data.itemId = _.uniqueId('');
                agregarItem(data);
            }
            $modalItem.modal('hide');
            _itemEditando = false;
            refrescarResumen();
        }
    }));

    $formBoletaDatosReceptor.validate(_.extend(window._validatorWallSettings, {
        debug: true,
        /*
        onkeyup: false,
        onchange: false,
        onclick: false,
        onfocusout: false,
        */
        rules: {
            txtDocumento: {
                required: function () {
                    return $selTipoDoc.val() != '-'
                },
                minlength: function () {
                    if ($selTipoDoc.val() == '-')
                        return false
                    if ($selTipoDoc.val() == '1') return 8;
                    else if ($selTipoDoc.val() == '6') return 11;
                    else return 1;
                },
                maxlength: function () {
                    if ($selTipoDoc.val() == '1') return 8;
                    else if ($selTipoDoc.val() == '6') return 11;
                    else return 15;
                },
                number: function () {
                    if ($selTipoDoc.val() == '-')
                        return false
                    if ($selTipoDoc.val() == '1' || $selTipoDoc.val() == '6') return true;
                },
            },
            txtRazonSocial: {
                required: function () {
                    return ['1', '6', '-'].indexOf($selTipoDoc.val()) === -1;
                }
            }
        },
        // estos mensajes estan aqui porque son d&iacute;n&aacute;micos respecto al html
        messages: {},
        submitHandler: function (form) {
            if(!$razonSocial.val())
                $razonSocial.val('-')
            if ($selTipoDoc.val() == '1') {
                $modalPreloader.modal('show');
                validarExistenciaDNI();
            } else if ($selTipoDoc.val() == '6') {
                $modalPreloader.modal('show');
                validarExistenciaRUC();
            } else {
                $btnContinuar.removeClass('hidden');
                $btnValidarDatosReceptor.addClass('hidden');
            }
        }
    }));
    $formItem.validate(_.extend(window._validatorWallSettings, {
        rules: {
            hiddenHelperItem: {
                moreThan: 0,
                lessThan: 10
            }
        },
        ignore: '.ignored-field, .tt-hint',
        messages: {
            hiddenHelperItem: {
                moreThan: function () {
                    if ($selTipoDoc.length == 0) return "Agregue un item a la boleta"
                    else return "Agregue un item a la boleta"
                },
                lessThan: function () {
                    if ($selTipoDoc.length == 0) return "Solo se permiten 10 items en la boleta."
                    else return "Solo se permiten 10 items en la boleta."
                }
            }
        }
    }))
    $formComprobante.validate(_.extend(window._validatorWallSettings, {
        rules: {
			txtFechaEmision: {
                required: true,
				validIgvVigente: { depends:
									function(element){
										var femision = $txtFechaEmision.val();
										var fminigv = $("#fechaMinIgvPorcentaje").val();
										var fmaxigv = $("#fechaMaxIgvPorcentaje").val();
										
										console.log("fechaMinIgvPorcentaje_"+fminigv);
										console.log("fechaMaxIgvPorcentaje_"+fmaxigv);
										console.log("femision_"+femision);
										console.log($("#igvPorcentajeGlobal").val());
										
										if(femision > fminigv  && femision < fmaxigv){
											console.log("-");
											return false;
										}else{
											console.log("asignando otro igv diferente al actual");
											
												return true;
											
										}
									}					
								 },
				validPresLibro: { depends: 
									function(element){
										var femision = $txtFechaEmision.val();	//utp 
										var factual = formatFecha(new Date);										
										if(femision.substring(3,5) != factual.substring(3,5)){ 
											console.log("true");
											return true;
										}else{ 
											console.log("false");
											return false;
										}
									}
								}
            },
            selMoneda: {
                required: true
            },
            txtLugarEntrega: {
                required: function (argument) {
                    return $selTipoDoc.length == 0;
                }
            }
        },
        messages: {
			txtFechaEmision: {
                required: "Ingrese la Fecha de Emisi&oacute;n"
            },
            selMoneda: {
                required: "Seleccione la Moneda"
            },
            txtLugarEntrega: {
                required: "Ingrese el Lugar de entrega"
            }
        }
    }));

    function soloNumeros(e) {
        var key = window.Event ? e.which : e.keyCode
        return (key >= 48 && key <= 57)
    }

    function soloLetrasNumerosEspacios(e) {
        key = e.keyCode || e.which;
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " Ã¡Ã©Ã­Ã³ÃºabcdefghijklmnÃ±opqrstuvwxyz1234567890";
        especiales = "8-37-39-46";
        tecla_especial = false
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }
        if (letras.indexOf(tecla) == -1 && !tecla_especial) {
            return false;
        }
    }
    
    /* Inicio PAS20211U210100008 */
    function SoloNumeroDecimalTwo(e, field) {
        key = e.keyCode ? e.keyCode : e.which
        // backspace
        if (key == 8) return true
        // 0-9 a partir del .decimal
        if (field.value != "") {
            if ((field.value.indexOf(".")) > 0) {
                //si tiene un punto valida dos digitos en la parte decimal
                if (key > 47 && key < 58) {
                    if (field.value == "") return true
                    //regexp = /[0-9]{1,10}[\.][0-9]{1,10}$/
                    regexp = /[0-9]{2}$/;
                    return !(regexp.test(field.value))
                }
            }
        }
        // 0-9
        if (key > 47 && key < 58) {
            if (field.value == "") return true
            regexp = /[0-9]{10}/
            return !(regexp.test(field.value))
        }
        // .
        if (key == 46) {
            if (field.value == "") return false
            regexp = /^[0-9]+$/
            //PAS20201U210100231- reemplazar coma -OPV
            var remplazo=field.value;
            remplazo=remplazo.replaceAll(/,/g, "");
            //return regexp.test(field.value)
            return regexp.test(remplazo);
            //PAS20201U210100231-OPV
        }
        // other key
        return false
    }
    /* Fin PAS20211U210100008 */
    
    function SoloNumeroDecimal(e, field) {
        key = e.keyCode ? e.keyCode : e.which
            // backspace
        if (key == 8) return true
            // 0-9 a partir del .decimal  
        if (field.value != "") {
			if ((field.value.indexOf(".")) > 0) {
				//si tiene un punto valida dos digitos en la parte decimal
                if (key > 47 && key < 58) {
                    if (field.value == "") return true
                        //regexp = /[0-9]{1,10}[\.][0-9]{1,3}$/
                    //regexp = /[0-9]{2}$/ /* PAS20211U210100008 */
                    regexp = /[0-9]{10}$/ /* PAS20211U210100008 */
                    return !(regexp.test(field.value))
                }
            }
        }
        // 0-9 
        if (key > 47 && key < 58) {
			if (field.value == "") return true
            regexp = /[0-9]{10}/
            return !(regexp.test(field.value))
        }
        // .
        if (key == 46) {
            if (field.value == "") return false
            regexp = /^[0-9]+$/
            return regexp.test(field.value)
        }
        // other key
        return false
    }
    window.onload = function () {
        // $selTipoDoc.val('7').trigger('change');
        // $RUCField.val('adasdasdasdasda').trigger('change');
        // $razonSocial.val('asdasdasdasdasd').trigger('change');
        // $formBoletaDatosReceptor.trigger('submit');
    }
	
	
	$.validator.addMethod("validPresLibro", function(value, element, param) {
        var valid = validPresLibro(value);
		console.log("valid="+valid);
        $(element).data('validPresLibro', valid ? '1' : '0');		
		return valid;
    }, "Ya se present&oacute; el libro en ese periodo.");
	
	function validPresLibro(valor){       	 
		var retorno = true;
		var url = 'emitirbvsimp.do?action=validarPresLibro';
		var formData = { txtRUC: $RUCField.val(), txtFechaEmision: valor};
		
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
		async: false,
        success: function(data) {
			
			console.log("data.nlibro_"+data.nlibro);
			if(data.nlibro != 0){
				$txtFechaEmision.data('pivot-valid', '0');
				console.log("==>false");
				retorno = false; 
			}else{
				console.log("==>true");
				retorno = true;
			}						         
        },		
        error: function () {
          alert('error');
          $txtFechaEmision.data('pivot-valid', '0');
        },
        complete: function () {
          $modalPreloader.modal('hide');
        }
		
      });
	  return retorno;
    }
	
	$.validator.addMethod("validIgvVigente", function(value, element, param) {
        var valid = validIgvVigente(value);
        $(element).data('validIgvVigente', valid ? '1' : '0');		
		return valid;
    }, "Ingresar nuevamente los items.");
    
	function validIgvVigente(valor){
		
		console.log("entra a validIgvVigente");
		var retorno = true;
		var url = 'emitirbvsimp.do?action=recuperarIgvConFecha';
		var formData = { fechaEmision: valor };
		
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
		async: false,
        success: function(data) {
						
			console.log("data.fechaMinIgv_"+data.fechaMinIgv);
			console.log("data.fechaMaxIgv_"+data.fechaMaxIgv);
								
			console.log("data.tasaIgv="+data.tasaIgv);
			console.log("igvPorcentajeGlobal="+$("#igvPorcentajeGlobal").val() );
			
			console.log("_Items="+_Items.length);
			
			if ( ($('#igvPorcentajeGlobal').val() != data.tasaIgv)  &&  _Items.length > 0){
				if($('#igvPorcentajeGlobal').val("10.0")){
					console.log($('#igvPorcentajeGlobal').val());
					asignarIGVDiferente($('#igvPorcentajeGlobal').val(), true, data.fechaMinIgv, data.fechaMaxIgv);	
				}else{					
				
					var mensajeCambioIGV = "La fecha de emisi\u00f3n seleccionada tiene otro valor de IGV (" + Math.floor(data.tasaIgv) + "%), tendr\u00e1 que volver a ingresar los items \u00BFDesea Continuar?";

					if (confirm(mensajeCambioIGV)){
						console.log("borrando items");
						
						eliminarItemsAll();
						
						asignarIGVDiferente(data.tasaIgv, true, data.fechaMinIgv, data.fechaMaxIgv);
						retorno = false;
					}else {
						//this.setFechaEmisionPrevia();
						//response = false;					
						//$txtFechaEmision.val(formatFecha(new Date));					
						retorno = false;
					}
				}
			} else {				
				asignarIGVDiferente(data.tasaIgv, true, data.fechaMinIgv, data.fechaMaxIgv);
			}			
        },		
        error: function () {
          alert('error');
          //$txtFechaEmision.data('pivot-valid', '0');
        },
        complete: function () {
          $modalPreloader.modal('hide');
        }
		
      });
	  return retorno;
    }
	
	
	function eliminarItemsAll(){
		
		for (var i in _Items) {
            var doc = _Items[i];            
			eliminarItem({
            itemId: doc.itemId
			});
		}
		refrescarResumen();
	}
	
	function asignarIGVDiferente(tasaIgv, mostrarMensajes, fechaMinIgv, fechaMaxIgv){
		console.log(tasaIgv);
		var retorno = true;
		var url = 'emitirbvsimp.do?action=asignarIGVDiferente';
		var formData = { igvDiferente: tasaIgv };
		
		$.ajax({
			url: url,
			type: "POST",
			data: formData,
			dataType: 'json',
			async: true,
			success: function(data) {
				//"Total IGV (" + Math.floor(tasaIgv) + "%)"
				document.getElementById("lblIgvPorcentaje").innerHTML = "Total IGV";				
				$("#igvPorcentajeGlobal").val(tasaIgv);
				$("#fechaMinIgvPorcentaje").val(fechaMinIgv);//
				$("#fechaMaxIgvPorcentaje").val(fechaMaxIgv);//
			},		
        error: function () {
          alert('error');
        },
        complete: function () {
          $modalPreloader.modal('hide');
        }
		
      });
	  return retorno;
    }
        
        /*
         *  :::: Form Validate :::: END
         */

// })(window, jQuery, _);


/*********** BOLSAS PLASTICAS ********/


	function initICBPER() {
		var $ICBPER = $formModalItem.find('#txtICBPER');
		var $impuestoICBPER = $formModalItem.find('#txtImpICBPER');

		if ($selMoneda.val() == 'PEN') {       
			$ICBPER.val("0.00");
			$impuestoICBPER.val("0.00");     
			$impuestoICBPER.attr('readonly', 'readonly')
		} else {
			$impuestoICBPER.attr('readonly', 'readonly')
			$impuestoICBPER.val("0.00");
			$ICBPER.val("0.00");
		}
		$formModalItem.find("#rdgICBPERno").prop('checked', true);
	}

	function impuestoICBPER() {
		var fecEmision = $formComprobante.find('#txtFechaEmision').val().split("/");
		var currentyear = new Date(fecEmision[2], fecEmision[1] - 1, fecEmision[0]).getFullYear();
		var valorICBPER = currentyear > 2023 ? _impuestoICBPER[2023] : _impuestoICBPER[currentyear];    
		return valorICBPER;
	}

	function ImpuestoBolsasFecha(e) {
		var mostrar = $formComprobante.find('#tributoNrus').val();
		var condicion = true;
		if (_Items.length > 0 && mostrar != "1") {
			for (var i = 0; i < _Items.length; i++) {
				if (!(_Items[i].txtICBPER === "0.00")) {
					condicion = false;
					break;
				}
			}
		}
		if (!condicion) {
			var msg = "No puede cambiar la fecha de emisión, existen ítems agregados con ICBPER";
			alert(msg);
			return;
		} else {
			_CURR_DATE_PICKER = $(e.target);
			$modalDatepicker.modal('show');
		}
	}
	
	function recorreTablaItems() {
			console.log(_Items);
			var count10=0;
			var count18=0;
			var countExo=0;
			var tbody = $tablaItem.find('tbody');
			//tbody.empty();
			if(_Items.length<1){
				$('#fromItems-btnCerrar').prop('disabled', false);
				console.log("correcto");
				$modalListaItems.modal('hide');
			}else{
				for (var i in _Items) {
					var esGravado = false;
					var noGravado = false;
					var totalVta = 0;
					var totalImp =0;
					var pIgv = 0;
					var doc = _Items[i];
					for (var k in _itemSchema) {
						var text = doc[k];
						if (k == 'selTipoIgv'){
							if(text == 'TB00'){
								console.log("es gravado");
								esGravado = true;
							}
							if(text == 'TB01'){
								console.log("es exonerado");
								countExo++;
								break;
							}
						}
						if (k == 'txtIGV'){
							totalImp = text;
						}
						if (k == 'txtImporte'){
							totalVta = text;
						}
					}
					//console.log(i);
					//console.log(_Items[i]);
					if(esGravado == true){
						pIgv = _Items[i].tipoIGV;
					}
					console.log("==>(Impuesto Calculado) - "+pIgv);
					if(pIgv == "10.0"){
						//console.log(pIgv);
						count10++;
					}else if(pIgv == "18.0"){
						//console.log(pIgv);
						count18++;
					}
				}
				console.log(count18);
				console.log(count10);
				console.log(countExo);
				if(count18>0 && count10>0){
					//alert("No se puede emitir en una misma factura items con tasas de IGV distintas")
					alert("Todos los ítems deben tener la misma tasa de IGV: 10% o 18%")
				}else{
					if (countExo>0 && count10>0){
						//alert("No se puede emitir en una misma factura items exonerados y gravados con tasa de IGV del 10%")
						alert("Todos los ítems deben tener la misma tasa de IGV: 10% o 18%")
					}else{
						//$('#fromItems-btnCerrar').prop('disabled', false);
						if(count18>count10){
							$("#igvPorcentajeGlobal").val("18.0");
						}else{
							$("#igvPorcentajeGlobal").val("10.0");
						}
						console.log("correcto");
						//$modalListaItems.modal().hide();
						$modalListaItems.modal('hide');
					}
				}
			}
	};
	
	function calcularTotalIGV() {
		var cantidad = $formModalItem.find('#txtCantidad').numVal();
        var valorUnidad = $formModalItem.find('#txtValorUnitario').numVal();
        var descuento = $formModalItem.find('#txtDescuento').numVal();
        var ICBPER = $formModalItem.find('#txtICBPER').length > 0 ?   $formModalItem.find('#txtICBPER').numVal() : 0;
        var $igv = $formModalItem.find('#txtIGV');
		var $selTipoIgv = $formModalItem.find('#selTipoIgv');
        var $importe = $formModalItem.find('#txtImporte');
        var $impuestoICBPER = $formModalItem.find('#txtImpICBPER');
        var subtotal = (cantidad * valorUnidad) - descuento;		
        //var impuesto = 0.18 * subtotal;
		//Cambio NS
		if( $('#subTipoIgv01').is(':checked') ){
			console.log("IGV 10");
			$("#igvPorcentajeGlobal").val("10.0");
			$("input[name='tipoIGV']").val($("#igvPorcentajeGlobal").val());
		}else{
			console.log("IGV 18");
			$("#igvPorcentajeGlobal").val("18.0");
			$("input[name='tipoIGV']").val($("#igvPorcentajeGlobal").val());
		}
		//Fin Cambio NS
		var impuesto = $("#igvPorcentajeGlobal").val() * 0.01 * subtotal;
		var impuestoTotalICBPER = cantidad * ICBPER;
		
		if ( $('#rdgGravado').is(':checked') ){
			console.log("1 rdgGravado");
			var total = impuesto + subtotal;			
			//$igv.val(impuesto.toFixed(2)); /* PAS20211U210100008 */
			impuesto = parseFloat(impuesto).toFixed(10); /* PAS20211U210100008 */
			console.log("impuesto --> " + impuesto); /* PAS20211U210100008 */
			$igv.val(remove(impuesto)); /* PAS20211U210100008 */
			//$selTipoIgv.val("Gravado");
			$selTipoIgv.val("TB00");
		}else if ( $('#rdgExonerado').is(':checked') ){
			console.log("2 rdgExonerado");
			var total = subtotal;
			$igv.val("0.00");
			//$selTipoIgv.val("Exonerado");
			$selTipoIgv.val("TB01");
		}
        
        if ($("#rdgICBPERsi").is(':checked')) {                       
             if ($selMoneda.val() == 'PEN') {
                var total = total + impuestoTotalICBPER;
                $impuestoICBPER.val(impuestoTotalICBPER.toFixed(2));
                $formModalItem.find('#txtCantidad').val(Math.trunc(cantidad)); /* PAS20211U210100008 */
                console.log("cantidad --> " + $formModalItem.find('#txtCantidad').val()); /* PAS20211U210100008 */
             }else{

                if($impuestoICBPER.val().length > 0){
                    var  total = total + $impuestoICBPER.numVal();
                }                
            }
        } else if ($("#rdgICBPERno").is(':checked')) {
            total = total;
        }

		total = parseFloat(total).toFixed(10); /* PAS20211U210100008 */
		console.log("total="+total);
        //var total = impuesto + subtotal;
        //$igv.val(impuesto.toFixed(2));
		
        //$importe.val(total.toFixed(2)); /* PAS20211U210100008 */
		$importe.val(remove(total)); /* PAS20211U210100008 */
	};
	

	$( "#subTipoIgv00" ).click(function() {
	  console.log("entra a 18%");
	  $('#rdgExonerado').prop('disabled', false);
	  //$( "#txtValorUnitario" ).val("");
	  //$( "#txtIGV" ).val("");
	  //$( "#txtImporte" ).val("");
	  if($('#rdgGravado').is(':checked')){
		calcularTotalIGV();
	  }
	});

	$( "#subTipoIgv01" ).click(function() {
	  console.log("entra a 10%");
	  $('#rdgExonerado').prop('disabled', true);
	  $formModalItem.find("#rdgGravado").prop('checked', true);
	  //$( "#txtValorUnitario" ).val("");
	  //$( "#txtIGV" ).val("");
	  //$( "#txtImporte" ).val("");
	  if($('#rdgGravado').is(':checked')){
		calcularTotalIGV();
	  }
	});
	
	//$('#modal-mostrar-items').modal({keyboard: false})  
	

