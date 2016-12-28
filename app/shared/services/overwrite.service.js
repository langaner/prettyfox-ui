"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { BreadcrumbSettings } from '../../components/breadcrumb/breadcrumb.interfaces';
// import { HighlightSettings } from '../../components/highlight/highlight.interfaces';
// import { TieredmenuSettings } from '../../components/tieredmenu/tieredmenu.interfaces';
// import { AccordionSettings } from '../../components/accordion/accordion.interfaces';
var OverwriteService = (function () {
    function OverwriteService() {
        /**
         * Buttons
         */
        this.buttonsSettings = {
            label: '',
            iconResource: 'fa',
            iconPlacement: 'left',
            icon: '',
            color: 'secondary',
            size: 'md',
            class: '',
            outline: false,
            fullWidth: false,
            circle: false,
            type: 'button',
            url: null
        };
        /**
         * checkbox
         */
        this.checkboxSettings = {
            bool: true,
            color: 'primary'
        };
        /**
         * Colorpicker
         */
        this.colorpickerSettings = {
            size: 'md',
            spectrumHeight: 250,
            spectrumWidth: 250,
            hueHeight: 250,
            hueWidth: 25,
            alphaHeight: 250,
            alphaWidth: 25,
            outputFormat: 'hex',
            showPallete: true,
            showPicker: true,
            palette: [
                ["rgb(255, 204, 204)", "rgb(255, 230, 204)", "rgb(255, 255, 204)", "rgb(204, 255, 204)", "rgb(204, 255, 230)", "rgb(204, 255, 255)", "rgb(204, 230, 255)", "rgb(204, 204, 255)", "rgb(230, 204, 255)", "rgb(255, 204, 255)"],
                ["rgb(255, 153, 153)", "rgb(255, 204, 153)", "rgb(255, 255, 153)", "rgb(153, 255, 153)", "rgb(153, 255, 204)", "rgb(153, 255, 255)", "rgb(153, 204, 255)", "rgb(153, 153, 255)", "rgb(204, 153, 255)", "rgb(255, 153, 255)"],
                ["rgb(255, 102, 102)", "rgb(255, 179, 102)", "rgb(255, 255, 102)", "rgb(102, 255, 102)", "rgb(102, 255, 179)", "rgb(102, 255, 255)", "rgb(102, 179, 255)", "rgb(102, 102, 255)", "rgb(179, 102, 255)", "rgb(255, 102, 255)"],
                ["rgb(255, 51, 51)", "rgb(255, 153, 51)", "rgb(255, 255, 51)", "rgb(51, 255, 51)", "rgb(51, 255, 153)", "rgb(51, 255, 255)", "rgb(51, 153, 255)", "rgb(51, 51, 255)", "rgb(153, 51, 255)", "rgb(255, 51, 255)"],
                ["rgb(255, 0, 0)", "rgb(255, 128, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 128)", "rgb(0, 255, 255)", "rgb(0, 128, 255)", "rgb(0, 0, 255)", "rgb(128, 0, 255)", "rgb(255, 0, 255)"],
                ["rgb(245, 0, 0)", "rgb(245, 123, 0)", "rgb(245, 245, 0)", "rgb(0, 245, 0)", "rgb(0, 245, 123)", "rgb(0, 245, 245)", "rgb(0, 123, 245)", "rgb(0, 0, 245)", "rgb(123, 0, 245)", "rgb(245, 0, 245)"],
                ["rgb(214, 0, 0)", "rgb(214, 108, 0)", "rgb(214, 214, 0)", "rgb(0, 214, 0)", "rgb(0, 214, 108)", "rgb(0, 214, 214)", "rgb(0, 108, 214)", "rgb(0, 0, 214)", "rgb(108, 0, 214)", "rgb(214, 0, 214)"],
                ["rgb(163, 0, 0)", "rgb(163, 82, 0)", "rgb(163, 163, 0)", "rgb(0, 163, 0)", "rgb(0, 163, 82)", "rgb(0, 163, 163)", "rgb(0, 82, 163)", "rgb(0, 0, 163)", "rgb(82, 0, 163)", "rgb(163, 0, 163)"],
                ["rgb(92, 0, 0)", "rgb(92, 46, 0)", "rgb(92, 92, 0)", "rgb(0, 92, 0)", "rgb(0, 92, 46)", "rgb(0, 92, 92)", "rgb(0, 46, 92)", "rgb(0, 0, 92)", "rgb(46, 0, 92)", "rgb(92, 0, 92)"],
                ["rgb(255, 255, 255)", "rgb(205, 205, 205)", "rgb(178, 178, 178)", "rgb(153, 153, 153)", "rgb(127, 127, 127)", "rgb(102, 102, 102)", "rgb(76, 76, 76)", "rgb(51, 51, 51)", "rgb(25, 25, 25)", "rgb(0, 0, 0)"]
            ]
        };
        this.colorpickerLangs = {};
        /**
         * Datagrid
         */
        this.datagridLangs = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            removeChecked: 'Remove checked',
            actionsCol: 'Actions',
            counterView: 'view',
            counterOf: 'of',
            counterPages: 'pages',
            removePopoverTitle: 'You are sure?',
            cancelRemove: 'Cancel',
            remove: 'Remove',
            edit: 'Edit',
            view: 'View',
            totalRowsView: 'view',
            create: 'Create',
            filterIt: 'Apply filter',
            filterTitle: 'Filter',
            filterBy: 'by',
            resetIt: 'Reset',
            confirme: {
                true: 'Yes',
                false: 'No'
            }
        };
        this.datagridSettings = {
            size: 'md',
            color: 'default',
            theadColor: 'default',
            useEqual: true,
            tableHovered: true,
            tableStripped: false,
            lazyload: true,
            colsList: [
                {
                    field: 'id',
                    label: 'ID'
                }
            ],
            equalOptions: [
                {
                    label: 'Like',
                    value: 'like'
                },
                {
                    label: 'Like right',
                    value: 'r_like'
                },
                {
                    label: 'Like left',
                    value: 'l_like'
                },
                {
                    label: 'Is',
                    value: 'is'
                },
                {
                    label: 'Is not',
                    value: 'is_not'
                },
                {
                    label: 'In',
                    value: 'in'
                },
                {
                    label: 'Not in',
                    value: 'not_in'
                },
                {
                    label: 'Equal more',
                    value: 'eg'
                },
                {
                    label: 'Equal less',
                    value: 'el'
                }
            ],
            booleanOptions: [
                {
                    label: 'Yes',
                    value: true
                },
                {
                    label: 'No',
                    value: false
                }
            ],
            totalViewList: [10, 20, 30, 40, 50],
            defaultSortedField: 'id',
            defaultSortedOrder: 'desc',
            showActions: true,
            showCounter: true,
            showTotalView: true,
            showFilters: true,
            showSort: true,
            actionOnRowClick: null
        };
        /**
         * Datepicker
         */
        this.datepickerSettings = {
            format: 'YYYY-MM-DD H:mm:ss',
            displayFormat: 'DD MM YYYY H:mm:ss',
            size: 'md',
            color: 'secondary',
            closeOnSelect: true,
            showTime: true,
        };
        this.datepickerLangs = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            days: ['Mo', 'Su', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            today: 'Today',
            seconds: 'sec',
            minutes: 'min',
            hours: 'hours',
            selectedDate: 'Selected:',
            prevMonth: '<i class="fa fa-chevron-left"></i>',
            nextMonth: '<i class="fa fa-chevron-right"></i>',
            prevYear: '<i class="fa fa-chevron-left"></i>',
            nextYear: '<i class="fa fa-chevron-right"></i>',
            upTime: '<i class="fa fa-chevron-up"></i>',
            downTime: '<i class="fa fa-chevron-down"></i>',
        };
        /**
         * Dropdown
         */
        this.dropdownSettings = {
            label: '',
            color: 'secondary',
            size: 'md',
            dropUp: false,
            split: false,
            alignment: '',
            header: ''
        };
        /**
         * Editor
         */
        this.editorSettings = {
            menu: [
                ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
                ['pre', 'insertParagraph', 'blockquote', 'removeFormat'],
                ['justifyleft', 'justifycenter', 'justifyright'],
                ['insertorderedlist', 'insertunorderedlist', 'outdent', 'indent'],
            ],
            fontSizes: [
                {
                    value: '1',
                    size: '10px'
                },
                {
                    value: '2',
                    size: '13px'
                },
                {
                    value: '3',
                    size: '16px'
                },
                {
                    value: '4',
                    size: '18px'
                },
                {
                    value: '5',
                    size: '24px'
                },
                {
                    value: '6',
                    size: '32px'
                },
                {
                    value: '7',
                    size: '48px'
                }
            ],
            height: 200,
            class: 'editor-area',
            id: null,
            color: 'secondary'
        };
        this.editorLangs = {
            fontSize: 'Font size'
        };
        /**
         * Fieldset
         */
        this.fieldsetSettings = {
            title: '',
            color: 'secondary',
            toggleable: false
        };
        /**
         * Fileuploader
         */
        this.fileuploaderSettings = {
            multiple: false,
            color: 'secondary',
            size: 'md',
            filterExtensions: true,
            allowedExtensions: ['jpg', 'png', 'image/jpeg', 'image/png', 'txt', 'pdf', 'text/plain', 'application/pdf'],
            imagesExtensions: ['jpg', 'png', 'image/jpeg', 'image/png'],
            filesExtensions: ['txt', 'pdf', 'text/plain', 'application/pdf'],
            showPreview: true,
            autoupload: false,
            speedProgress: true,
            xhrMethod: 'POST',
            xhrUrl: 'http://localhost',
            xhrCredentials: true,
            xhrHeaders: [],
            xhrAuthToken: null,
            xhrAuthTokenPrefix: '',
            iconsPath: 'app/resources/img/icons',
            viewCounter: false
        };
        this.fileuploaderLangs = {
            buttonText: 'Upload',
            extensionNotAllowed: 'Extension not allowed to upload',
            zeroBytes: '0 Byte',
            removeFile: '<i class="fa fa-times"></i>',
            uploadedCounter: 'files is uploaded',
            clearAll: 'Clear all'
        };
        /**
         * Input
         */
        this.inputSettings = {
            size: 'md',
            type: 'text'
        };
        /**
         * Modal
         */
        this.modalSettings = {
            label: '',
            color: 'secondary',
            size: 'md',
            modalSize: 'md'
        };
        /**
         * Multiselect
         */
        this.multiselectSettings = {
            search: true,
            limit: 3,
            closeOnSelect: false,
            checkAll: true,
            uncheckAll: true,
            titleMaxItems: 3,
            maxHeight: '300px',
            color: 'secondary',
            size: 'md',
            single: false
        };
        this.multiselectLangs = {
            searchPlaceholder: 'Search...',
            checkAllText: 'Check all',
            uncheckAllText: 'Uncheck all',
            defaultTitle: 'Select items',
            selectedItemsText: 'Selected'
        };
        /**
         * Navbar
         */
        this.navbarSettings = {
            brand: '',
            color: 'dark',
            background: 'inverse',
            brandLink: '#',
            fixed: '',
            showOnHover: true
        };
        /**
         * Notify
         */
        this.notifySettings = {
            position: ['top', 'right'],
            duration: 1,
            closeble: false,
            maxItems: 10,
            addToBottom: false,
            stopOnHover: true
        };
        /**
         * Pagination
         */
        this.paginationSettings = {
            prevNext: true,
            lastFirst: true,
            max: 0,
            separator: '...',
            size: 'md',
            color: 'default'
        };
        this.paginationLangs = {
            first: 'First',
            prev: 'Previous',
            next: 'Next',
            last: 'Last'
        };
        /**
         * Panel
         */
        this.panelSettings = {
            color: 'default'
        };
        /**
         * Popover
         */
        this.popoverSettings = {
            buttonLabel: '',
            color: 'secondary',
            buttonSize: 'md',
            placement: 'top',
            title: '',
            dismissible: true
        };
        /**
         * Progress
         */
        this.progressSettings = {
            max: 100,
            striped: false,
            showPersent: false,
            color: 'primary',
            animated: false
        };
        /**
         * Radio
         */
        this.radioSettings = {
            bool: true,
            color: 'primary'
        };
        /**
         * Rating
         */
        this.ratingSettings = {
            starsCount: 10,
            iconClass: 'fa fa-star',
            showRate: false,
            showRateLabel: false,
            levels: ['xlow', 'low', 'medium', 'high', 'xhigh'],
            size: 'sm'
        };
        this.ratingLangs = {
            rateLabel: 'Your rating is: '
        };
        /**
         * Panelmenu
         */
        this.panelmenuSettings = {
            tagColor: 'default',
            activeGroupColor: 'default',
            tagSize: 'xs',
            counter: false
        };
        /**
         * Select
         */
        this.selectSettings = {
            size: 'md',
            required: false
        };
        /**
         * Scrollbar
         */
        this.scrollbarSettings = {
            thumbWidth: '6',
            thumbColor: 'inverse',
            thumbRadius: '3',
            thumbOpacity: '1',
            thumbMargin: '0 2px 0 2px',
            trackWidth: '10',
            trackColor: 'faded',
            trackRadius: '0',
            trackOpacity: '0.7',
            trackMargin: '0',
            trackPosition: 'right',
            showOnEnter: false,
            showTimeout: 0.5,
            whellStep: 50
        };
        /**
         * Slidemenu
         */
        this.slidemenuSettings = {
            actionsHeight: 30,
            effectDuration: '500ms',
            easing: 'ease-out'
        };
        this.slidemenuLangs = {
            back: 'Back'
        };
        /**
         * Slider
         */
        this.sliderSettings = {
            thumbColor: 'secondary',
            trackColor: 'secondary',
            multiple: false,
            max: 10,
            min: 1
        };
        /**
         * Slidereveal
         */
        this.sliderevealSettings = {
            buttonColor: 'secondary',
            buttonSize: 'md',
            speed: 0.5,
            position: 'right',
            size: '300px',
            zindex: 9999,
            push: false,
            container: false,
            dismissible: true,
        };
        this.sliderevealLangs = {
            buttonLabel: 'Slide',
        };
        /**
         * Spinner
         */
        this.spinnerSettings = {
            max: 100,
            min: 1,
            prefix: '',
            postfix: '',
            color: 'secondary',
            size: 'md',
            step: 1,
            decimals: 0,
            forcestep: 'round'
        };
        /**
         * Switcher
         */
        this.switcherSettings = {
            trueColor: 'success',
            falseColor: 'danger',
            labelColor: 'secondary',
            trueValue: true,
            falseValue: false,
            size: 'md',
            width: 60
        };
        this.switcherLangs = {
            labelText: '&nbsp;',
            trueLabel: 'Yes',
            falseLabel: 'No'
        };
        /**
         * Tab
         */
        this.tabSettings = {
            color: 'secondary'
        };
        /**
         * Tag
         */
        this.tagSettings = {
            color: 'secondary',
            size: 'md',
            duplicates: false,
            minTagLength: 1,
            addTagOnComma: true,
            addTagOnEnter: true,
            addTagOnPaste: true,
            addTagOnSpace: false,
            addTagOnBlur: true
        };
        this.tagLangs = {
            inputPlaceholder: 'Type tag name',
        };
        /**
         * Textarea
         */
        this.textareaSettings = {
            size: 'md',
        };
        /**
         * Tooltip
         */
        this.tooltipSettings = {
            color: 'secondary',
            placement: 'top',
            title: ''
        };
        /**
         * Validate
         */
        this.validateLangs = {
            email: 'Field must be a valid email address',
            password: 'Password is incorrect',
            required: 'Field is required',
            minlength: 'Field must be at least :requiredLength characters',
            maxlength: 'Field may not be greater than :requiredLength characters',
            int: 'Field must be an integer',
            number: 'Field must be a number',
            date: 'Field must be valid date',
            minDate: 'Field must be at least :date date',
            maxDate: 'Field may not be greater than :date date',
            equal: 'Field must be equal :equal',
            max: 'Field may not be greater than :max number',
            min: 'Field must be at least :min number',
            range: 'Field must be between :min and :max',
            json: 'Field must be valid json',
            boolean: 'Field must be true or false',
            hex: 'Field must be valid hex color',
            rgb: 'Field must be valid rgb color'
        };
        this.validateSettings = {
            errorColor: 'danger',
            showAsterisk: true
        };
    }
    OverwriteService.prototype.ngOnInit = function () { };
    /**
     * Set component default settings
     *
     * @param {string} name
     * @param {Object} settings
     * @returns {*}
     *
     * @memberOf OverwriteService
     */
    OverwriteService.prototype.setSettings = function (name, settings) {
        var component = name + 'Settings';
        if (this[component]) {
            this[component] = Object.assign({}, this[component], settings);
        }
    };
    /**
     * Get component default settings
     *
     * @param {string} name
     * @returns {*}
     *
     * @memberOf OverwriteService
     */
    OverwriteService.prototype.getSettings = function (name) {
        var component = name + 'Settings';
        if (this[component]) {
            return this[component];
        }
        return;
    };
    /**
     * Set component default langs
     *
     * @param {string} name
     * @param {Object} langs
     * @returns {*}
     *
     * @memberOf OverwriteService
     */
    OverwriteService.prototype.setLangs = function (name, langs) {
        var component = name + 'Langs';
        if (this[component]) {
            this[component] = Object.assign({}, this[component], langs);
        }
    };
    /**
     * Get components default langs
     *
     * @param {string} name
     * @returns {*}
     *
     * @memberOf OverwriteService
     */
    OverwriteService.prototype.getLangs = function (name) {
        var component = name + 'Langs';
        if (this[component]) {
            return this[component];
        }
        return;
    };
    OverwriteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OverwriteService);
    return OverwriteService;
}());
exports.OverwriteService = OverwriteService;
//# sourceMappingURL=overwrite.service.js.map