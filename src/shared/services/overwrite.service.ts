import { Injectable, OnInit } from '@angular/core';

import { ButtonsSettings } from '../../components/buttons/buttons.model';
import { InputSettings } from '../../components/input/input.model';
import { TextareaSettings } from '../../components/textarea/textarea.model';
import { AlertSettings } from '../../components/alert/alert.model';
import { DropdownSettings } from '../../components/dropdown/dropdown.model';
import { TabSettings } from '../../components/tab/tab.model';
import { CheckboxSettings } from '../../components/checkbox/checkbox.model';
import { RadioSettings } from '../../components/radio/radio.model';
import { SelectSettings } from '../../components/select/select.model';
import { PopoverSettings } from '../../components/popover/popover.model';
import { TooltipSettings } from '../../components/tooltip/tooltip.model';
import { SpinnerSettings } from '../../components/spinner/spinner.model';
import { ModalSettings } from '../../components/modal/modal.model';
import { SwitcherSettings, SwitcherLangs } from '../../components/switcher/switcher.model';
import { SliderSettings } from '../../components/slider/slider.model';
import { PanelSettings } from '../../components/panel/panel.model';
import { ProgressSettings } from '../../components/progress/progress.model';
import { PaginationSettings, PaginationLangs } from '../../components/pagination/pagination.model';
import { MultiselectSettings, MultiselectLangs } from '../../components/multiselect/multiselect.model';
import { DatepickerSettings, DatepickerLangs } from '../../components/datepicker/datepicker.model';
import { ColorpickerSettings, ColorpickerLangs } from '../../components/colorpicker/colorpicker.model';
import { FileuploaderSettings, FileuploaderLangs } from '../../components/fileuploader/fileuploader.model';
import { SliderevealSettings, SliderevealLangs } from '../../components/slidereveal/slidereveal.model';
import { TagSettings, TagLangs } from '../../components/tag/tag.model';
import { RatingSettings, RatingLangs } from '../../components/rating/rating.model';
import { EditorSettings, EditorLangs } from '../../components/editor/editor.model';
import { FieldsetSettings } from '../../components/fieldset/fieldset.model';
import { SlidemenuSettings, SlidemenuLangs } from '../../components/slidemenu/slidemenu.model';
import { PanelmenuSettings } from '../../components/panelmenu/panelmenu.model';
import { NotifySettings } from '../../components/notify/notify.model';
import { NavbarSettings } from '../../components/navbar/navbar.model';
import { DatagridSettings, DatagridLangs } from '../../components/datagrid/datagrid.model';
import { ScrollbarSettings } from '../../components/scrollbar/scrollbar.model';
import { ValidateSettings, ValidateLangs } from '../../components/validate/validate.model';
import { PasswordSettings, PasswordLangs } from '../../components/password/password.model';
import { TypeaheadSettings, TypeaheadLangs } from '../../components/typeahead/typeahead.model';
// import { BreadcrumbSettings } from '../../components/breadcrumb/breadcrumb.model';
// import { HighlightSettings } from '../../components/highlight/highlight.model';
// import { TieredmenuSettings } from '../../components/tieredmenu/tieredmenu.model';
// import { AccordionSettings } from '../../components/accordion/accordion.model';

@Injectable()
export class OverwriteService implements OnInit {

    /**
     * Buttons
     */
    protected buttonsSettings: ButtonsSettings = {
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
    protected checkboxSettings: CheckboxSettings = {
        bool: true,
        color: 'primary'
    };

    /**
     * Colorpicker
     */
    protected colorpickerSettings: ColorpickerSettings = {
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
            ["rgb(255, 204, 204)","rgb(255, 230, 204)","rgb(255, 255, 204)","rgb(204, 255, 204)","rgb(204, 255, 230)","rgb(204, 255, 255)","rgb(204, 230, 255)","rgb(204, 204, 255)","rgb(230, 204, 255)","rgb(255, 204, 255)"],
            ["rgb(255, 153, 153)","rgb(255, 204, 153)","rgb(255, 255, 153)","rgb(153, 255, 153)","rgb(153, 255, 204)","rgb(153, 255, 255)","rgb(153, 204, 255)","rgb(153, 153, 255)","rgb(204, 153, 255)","rgb(255, 153, 255)"],
            ["rgb(255, 102, 102)","rgb(255, 179, 102)","rgb(255, 255, 102)","rgb(102, 255, 102)","rgb(102, 255, 179)","rgb(102, 255, 255)","rgb(102, 179, 255)","rgb(102, 102, 255)","rgb(179, 102, 255)","rgb(255, 102, 255)"],
            ["rgb(255, 51, 51)","rgb(255, 153, 51)","rgb(255, 255, 51)","rgb(51, 255, 51)","rgb(51, 255, 153)","rgb(51, 255, 255)","rgb(51, 153, 255)","rgb(51, 51, 255)","rgb(153, 51, 255)","rgb(255, 51, 255)"],
            ["rgb(255, 0, 0)","rgb(255, 128, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 128)","rgb(0, 255, 255)","rgb(0, 128, 255)","rgb(0, 0, 255)","rgb(128, 0, 255)","rgb(255, 0, 255)"],
            ["rgb(245, 0, 0)","rgb(245, 123, 0)","rgb(245, 245, 0)","rgb(0, 245, 0)","rgb(0, 245, 123)","rgb(0, 245, 245)","rgb(0, 123, 245)","rgb(0, 0, 245)","rgb(123, 0, 245)","rgb(245, 0, 245)"],
            ["rgb(214, 0, 0)","rgb(214, 108, 0)","rgb(214, 214, 0)","rgb(0, 214, 0)","rgb(0, 214, 108)","rgb(0, 214, 214)","rgb(0, 108, 214)","rgb(0, 0, 214)","rgb(108, 0, 214)","rgb(214, 0, 214)"],
            ["rgb(163, 0, 0)","rgb(163, 82, 0)","rgb(163, 163, 0)","rgb(0, 163, 0)","rgb(0, 163, 82)","rgb(0, 163, 163)","rgb(0, 82, 163)","rgb(0, 0, 163)","rgb(82, 0, 163)","rgb(163, 0, 163)"],
            ["rgb(92, 0, 0)","rgb(92, 46, 0)","rgb(92, 92, 0)","rgb(0, 92, 0)","rgb(0, 92, 46)","rgb(0, 92, 92)","rgb(0, 46, 92)","rgb(0, 0, 92)","rgb(46, 0, 92)","rgb(92, 0, 92)"],
            ["rgb(255, 255, 255)","rgb(205, 205, 205)","rgb(178, 178, 178)","rgb(153, 153, 153)","rgb(127, 127, 127)","rgb(102, 102, 102)","rgb(76, 76, 76)","rgb(51, 51, 51)","rgb(25, 25, 25)","rgb(0, 0, 0)"]
        ]
    };

    protected colorpickerLangs: ColorpickerLangs = {
        
    };

    /**
     * Datagrid
     */
    protected datagridLangs: DatagridLangs = {
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
    
    protected datagridSettings: DatagridSettings = {
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
    protected datepickerSettings: DatepickerSettings = {
        format: 'YYYY-MM-DD H:mm:ss',
        displayFormat: 'DD MM YYYY H:mm:ss',
        size: 'md',
        color: 'secondary',
        dateColors: ['info', 'primary'],
        closeOnSelect: true,
        showTime: true,
        withoutToggler: false,
        multiple: false,
        maxDateSelect: 2
    };

    protected datepickerLangs: DatepickerLangs = {
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
        dateNotSelected: 'Date not selected'
    };

    /**
     * Dropdown
     */
    protected dropdownSettings: DropdownSettings = {
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
    protected editorSettings: EditorSettings = {
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

    protected editorLangs: EditorLangs = {
        fontSize: 'Font size'
    };

    /**
     * Fieldset
     */
    protected fieldsetSettings: FieldsetSettings = {
        title: '',
        color: 'secondary',
        toggleable: false
    };

    /**
     * Fileuploader
     */
    protected fileuploaderSettings: FileuploaderSettings = {
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

    protected fileuploaderLangs: FileuploaderLangs = {
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
    protected inputSettings: InputSettings = {
        size: 'md',
        type: 'text'
    };

    /**
     * Password
     */
    protected passwordSettings: PasswordSettings = {
        size: 'md',
        buttonColor: 'secondary',
        length: 10,
        minLength: 6
    };

    protected passwordLangs: PasswordLangs = {
        generate: 'Generate'
    };

    /**
     * Typeahead
     */
    protected typeaheadSettings: TypeaheadSettings = {
        size: 'md',
        titleField: 'title',
        valueField: 'value',
        lazyload: false
    };

    protected typeaheadLangs: TypeaheadLangs = {
        noResults: 'No result found'
    };

    /**
     * Modal
     */
    protected modalSettings: ModalSettings = {
        label: '',
        color: 'secondary',
        size: 'md',
        modalSize: 'md'
    };

    /**
     * Multiselect
     */
    protected multiselectSettings: MultiselectSettings = {
        search: true,
        limit: 3,
        closeOnSelect: false,
        checkAll: true,
        uncheckAll: true,
        titleMaxItems: 3,
        maxHeight: '300px',
        color: 'secondary',
        size: 'md',
        single: false,
        titleField: 'label',
        valueField: 'value'
    };

    protected multiselectLangs: MultiselectLangs = {
        searchPlaceholder: 'Search...',
        checkAllText: 'Check all',
        uncheckAllText: 'Uncheck all',
        defaultTitle: 'Select items',
        selectedItemsText: 'Selected'
    };

    /**
     * Navbar
     */
    protected navbarSettings: NavbarSettings = {
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
    protected notifySettings: NotifySettings = {
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
    protected paginationSettings: PaginationSettings = {
        prevNext: true,
        lastFirst: true,
        max: 0,
        separator: '...',
        size: 'md',
        color: 'default'
    };

    protected paginationLangs: PaginationLangs = {
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last'
    };

    /**
     * Panel
     */
    protected panelSettings: PanelSettings = {
        color: 'default'
    };

    /**
     * Popover
     */
    protected popoverSettings: PopoverSettings = {
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
    protected progressSettings: ProgressSettings = {
        max: 100,
        striped: false,
        showPersent: false,
        color: 'primary',
        animated: false
    };

    /**
     * Radio
     */
    protected radioSettings: RadioSettings = {
        bool: true,
        color: 'primary'
    };

    /**
     * Rating
     */
    protected ratingSettings: RatingSettings = {
        starsCount: 10,
        iconClass: 'fa fa-star',
        showRate: false,
        showRateLabel: false,
        levels: ['xlow', 'low', 'medium', 'high', 'xhigh'],
        size: 'sm'
    };

    protected ratingLangs: RatingLangs = {
        rateLabel: 'Your rating is: '
    };

    /**
     * Panelmenu
     */
    protected panelmenuSettings: PanelmenuSettings = {
        tagColor: 'default',
        activeGroupColor: 'default',
        tagSize: 'xs',
        counter: false
    };

    /**
     * Select
     */
    protected selectSettings: SelectSettings = {
        size: 'md',
        required: false
    };

    /**
     * Scrollbar
     */
    protected scrollbarSettings: ScrollbarSettings = {
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
    protected slidemenuSettings: SlidemenuSettings = {
        actionsHeight: 30,
        effectDuration: '500ms',
        easing: 'ease-out'
    };

    protected slidemenuLangs: SlidemenuLangs = {
        back: 'Back'
    };

    /**
     * Slider
     */
    protected sliderSettings: SliderSettings = {
        thumbColor: 'secondary',
        trackColor: 'secondary',
        multiple: false,
        max: 10,
        min: 1
    };

    /**
     * Slidereveal
     */
    protected sliderevealSettings: SliderevealSettings = {
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

    protected sliderevealLangs: SliderevealLangs = {
        buttonLabel: 'Slide',
    };

    /**
     * Spinner
     */
    protected spinnerSettings: SpinnerSettings = {
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
    protected switcherSettings: SwitcherSettings = {
        trueColor: 'success',
        falseColor: 'danger',
        labelColor: 'secondary',
        trueValue: true,
        falseValue: false,
        size: 'md',
        width: 60
    };

    protected switcherLangs: SwitcherLangs = {
        labelText: '&nbsp;',
        trueLabel: 'Yes',
        falseLabel: 'No'
    };

    /**
     * Tab
     */
    protected tabSettings: TabSettings = {
        color: 'secondary'
    };

    /**
     * Tag
     */
    protected tagSettings: TagSettings = {
        color: 'secondary',
        size: 'md',
        duplicates: false,
        minTagLength: 1,
        addTagOnComma: true,
        addTagOnEnter: true,
        addTagOnPaste: true,
        addTagOnSpace: false,
        addTagOnBlur: true,
        autocomplete: true,
        autocompleteItems: []
    };

    protected tagLangs: TagLangs = {
        inputPlaceholder: 'Type tag name',
    };

    /**
     * Textarea
     */
    protected textareaSettings: TextareaSettings = {
        size: 'md',
    };

    /**
     * Tooltip
     */
    protected tooltipSettings: TooltipSettings = {
        color: 'secondary',
        placement: 'top',
        title: ''
    };

    /**
     * Validate
     */
    protected validateLangs: ValidateLangs = {
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

    protected validateSettings: ValidateSettings = {
        errorColor: 'danger',
        showAsterisk: false
    };

    constructor(){}

    ngOnInit() {}

    /**
     * Set component default settings
     * 
     * @param {string} name
     * @param {Object} settings
     * @returns {*}
     * 
     * @memberOf OverwriteService
     */
    setSettings(name: string, settings: Object): any {
        let component = name + 'Settings';

        if(this[component]) {
            this[component] = (<any>Object).assign({}, this[component], settings);
        }
    }

    /**
     * Get component default settings
     * 
     * @param {string} name
     * @returns {*}
     * 
     * @memberOf OverwriteService
     */
    getSettings(name: string): any {
        let component = name + 'Settings';

        if(this[component]) {
            return this[component];
        }

        return;
    }

    /**
     * Set component default langs
     * 
     * @param {string} name
     * @param {Object} langs
     * @returns {*}
     * 
     * @memberOf OverwriteService
     */
    setLangs(name: string, langs: Object): any {
        let component = name + 'Langs';

        if(this[component]) {
            this[component] = (<any>Object).assign({}, this[component], langs);
        }
    }

    /**
     * Get components default langs
     * 
     * @param {string} name
     * @returns {*}
     * 
     * @memberOf OverwriteService
     */
    getLangs(name: string): any {
        let component = name + 'Langs';

        if(this[component]) {
            return this[component];
        }

        return;
    }
}