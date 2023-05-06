function List() {
  // lists like: arrays objects ec...
  // بعرف اراي عادي وضيفه في ال جي اس اكس علي الشكل الي انا عايزه باستحدام الماب كما ف المثال
  // وضيف مفتاح لانه بيسهل علي الرياكت بنا وحذف العناصر بدون مواجهه مشاكل
  const arr = ['samir', 'abdo', 'elanany'];
  const li = arr.map((el) => <li key={el.toString()}>{el}</li>);
  return (
    <ul>
      {li}
    </ul>
  )
}

export default List;