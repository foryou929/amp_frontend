export const PROJECT_STATUS = {
    RECRUITING: 0,
    PROGRESSING: 1,
    FINISH: 2,
}

export const SECTION = {
    NORMAL: 0,
    APPLY: 1,
    CHOOSE: 2,
    AGREE: 3,
    PREPAY: 4,
    ADVERT_SEND: 5,
    ADVERT_RECEIVE: 6,
    START_REPORT: 7,
    PROGRESS_REPORT: 8,
    END_REPORT: 9,
    PAY: 10,
    REVIEW: 11
}

export const STEPS = {
    client: [
        { label: "提案" },
        { label: "選定", button: "選定する", child: 1 },
        { label: "承諾", button: "承諾する", child: 1 },
        { label: "仮払い", button: "仮払いする", child: 2 },
        { label: "広告物発送", button: "広告物発送する" },
        { label: "広告物受け取り", },
        { label: "開始報告" },
        { label: "経過報告" },
        { label: "終了報告" },
        { label: "支払い", button: "報酬受取" },
        { label: "レビュー", button: "レビューする", child: 1 },
    ],
    user: [
        { label: "提案", button: "応募する", child: 1 },
        { label: "選定" },
        { label: "承諾" },
        { label: "仮払い" },
        { label: "広告物発送" },
        { label: "広告物受け取り", button: "広告物受け取りする", child: 1 },
        { label: "開始報告", button: "報告する", child: 1 },
        { label: "経過報告", button: "報告する", child: 1 },
        { label: "終了報告", button: "報告する", child: 1 },
        { label: "報酬受取" },
        { label: "レビュー", button: "レビューする", child: 1 },
    ]
}

export const SPACE_TYPES = [
    { label: "車の窓" },
    { label: "車の車体" },
    { label: "自転車" },
    { label: "バイク" },
    { label: "徒歩バックパック等" },
    { label: "一軒家" },
    { label: "集合住宅" },
    { label: "ノベルティーグッズの使用" },
    { label: "工事現場" },
    { label: "看板" },
    { label: "WEB SNS" },
    { label: "他" },
]

export const TRANSPORTATIONS = [
    { label: "徒歩" },
    { label: "車" },
    { label: "バイク" },
    { label: "その他" },
]