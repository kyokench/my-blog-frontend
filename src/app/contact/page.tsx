
const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="text-lg mb-4">
        ご質問やご意見などございましたら、以下のフォームよりお気軽にお問い合わせください。
      </p>
      {/* ここに実際のお問い合わせフォームのコンポーネントを配置します */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <p className="text-gray-700">※ 現在、フォームは準備中です。お急ぎの方はこちらまでご連絡ください: example@example.com</p>
      </div>
    </div>
  );
};

export default ContactPage;
