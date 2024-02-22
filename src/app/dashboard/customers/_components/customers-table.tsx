import { Customer } from "@/types/entities/customer.type";
import { CustomersTableView } from "./customers-table-view";

export async function fetchCustomers(page: number) {
  page--;
  return new Promise<Customer[]>((exec) => {
    setTimeout(() => exec(mockUsers.slice(page * 8, page * 8 + 8)), 1000);
  });
}

interface Props {
  page: number;
}

export async function CustomersTable({ page }: Props) {
  const customers = await fetchCustomers(page);

  return <CustomersTableView customers={customers} />;
}

const mockUsers: Customer[] = [
  {
    id: "voluptatem",
    firstName:
      "Ut similique fugiat possimus dicta excepturi ipsum delectus. Ipsum ab consequuntur voluptatem possimus molestias quidem. Tenetur blanditiis natus aut mollitia rerum aperiam. Dolorem iure debitis aliquam asperiores inventore.",
    lastName:
      "Accusantium minima officiis adipisci error in quia. Alias quod assumenda iure a. Consequatur in quod cumque veritatis et maiores ipsa consequuntur. Molestiae qui vitae earum tenetur qui repudiandae voluptas in maxime.\n \rVoluptatem consectetur est odio. Dolore voluptatem commodi deleniti deserunt. Quibusdam quisquam beatae eaque et. Delectus in commodi totam perferendis distinctio dolores ut minima.\n \rQuia nostrum quos est eum. Pariatur aut aliquam quia aspernatur. Nihil et dolores vitae dicta aut veniam.",
    address:
      "Et corporis non quidem ut deserunt distinctio. Voluptatem ea ducimus et eum optio quia. Nam ab minima voluptatem et architecto sit. Officia quia sed dolorem voluptas velit similique veritatis quia rerum.",
    dni: "Pariatur aperiam consequuntur fugiat dolores iste voluptate. Vel ipsam atque et non nihil culpa ad. Et nostrum recusandae harum molestiae quod hic officia. Omnis doloribus placeat commodi nostrum autem incidunt. Necessitatibus deserunt porro ipsam reprehenderit repudiandae.\n \rVoluptates reprehenderit omnis aut rerum. Id quas facilis. Maxime natus suscipit omnis unde vel et vero. Dolores dolorum doloribus blanditiis sed laudantium omnis a perspiciatis ut.\n \rEst aut voluptatem architecto velit placeat dolores dolorem commodi qui. Dolore necessitatibus sed quidem. Et quaerat eligendi. Non sapiente aperiam. Sapiente non omnis esse.",
    birthdate:
      "Voluptatem sit a sit consequatur corporis. Quis sapiente eaque explicabo est voluptate non eum. Ut totam et iure iusto. Provident deserunt accusantium fuga vero architecto.",
    citizenship:
      "Non nesciunt perferendis dolores. Architecto cupiditate nostrum non sapiente iste sunt. Temporibus ut necessitatibus eligendi. Enim sint exercitationem libero. Quam molestiae ullam culpa eveniet commodi quis eum dolore. Optio ullam error eveniet aut in sit.",
    phoneNumber: "Excepturi nemo voluptatem id neque.",
    email:
      "Cum repellendus delectus exercitationem voluptate consequatur necessitatibus.",
  },
  {
    id: "qui",
    firstName: "libero neque reprehenderit",
    lastName:
      "Aut veritatis quis. Et voluptatem totam. Sit incidunt praesentium beatae. Praesentium deserunt iste expedita modi sed.\n \rSed cum natus corrupti quis. Quod expedita nobis dolores aut omnis qui deleniti reprehenderit. Maiores magnam magnam quia incidunt corporis. Aut sint vel sunt autem sed. Unde ut esse tempora sint quae.\n \rCorrupti officia sapiente cumque corrupti qui aut est maxime. Autem aut nemo. Suscipit rem optio voluptatem illo consectetur facilis. Velit laboriosam tenetur veritatis. Vero rerum sunt nostrum sed. Voluptas sequi nulla.",
    address: "Fuga aut quae eligendi incidunt cumque ut.",
    dni: "aut",
    birthdate: "est praesentium illum",
    citizenship: "Illum labore aut possimus et corrupti architecto quia.",
    phoneNumber:
      "Labore optio est et molestiae adipisci rerum consequatur quia. Ipsam corrupti consequatur officiis quo perspiciatis vitae totam. Cupiditate impedit laboriosam repellendus inventore asperiores numquam debitis consequatur autem. Expedita aut reiciendis laudantium quia accusantium eius.\n \rIpsum eligendi dolor vel incidunt ut. Dolor ducimus ea nostrum consequatur. Maiores eum animi cumque dolor.\n \rA incidunt nam doloribus quisquam qui quo quia. Voluptas aut atque facere error molestias rem. Aut non a aut officiis qui.",
    email: "maxime facilis quisquam",
  },
  {
    id: "Praesentium qui et. Et adipisci ipsum id doloremque et.",
    firstName: "numquam corporis sed",
    lastName: "Vitae a voluptas.",
    address:
      "Ab aspernatur fugiat aspernatur ad ducimus.\nMaiores consectetur nulla est.\nFacilis rerum doloremque dolorem.",
    dni: "commodi voluptatum quo",
    birthdate: "ut",
    citizenship: "Tempore a autem sint pariatur.",
    phoneNumber:
      "Possimus quis veniam dolorem provident iste quis ullam totam.\nFugit delectus eligendi ea et inventore eos magnam aut dolorem.\nExcepturi minima non natus unde et cupiditate fuga.\nAut omnis quia nemo non.",
    email:
      "Perferendis cumque sit blanditiis quis et culpa molestiae praesentium voluptas. Distinctio maiores debitis. Numquam reiciendis molestias unde ex sunt expedita aliquid est.",
  },
  {
    id: "architecto voluptatem et",
    firstName: "vitae",
    lastName: "voluptas",
    address: "accusamus dolore labore",
    dni: "Nihil natus amet quidem et voluptatum et ut dolor consequuntur. Sit occaecati modi nisi. Voluptatem ducimus itaque. Distinctio nemo vero optio officiis facilis est laudantium nulla. In impedit repudiandae non officiis.",
    birthdate:
      "Et explicabo et id. Sunt aut est atque ab eaque praesentium iusto delectus.",
    citizenship:
      "Praesentium quisquam illum non exercitationem labore recusandae quam. Distinctio dolor autem totam molestiae. Dolores non debitis quidem voluptate adipisci et et numquam magnam. Atque nisi rerum ex distinctio explicabo excepturi dolore voluptatem.",
    phoneNumber:
      "Ab consequatur placeat ad. At sed maxime ex voluptate quidem optio facilis harum dolor. A ex facilis sunt dolore at. Voluptatem ducimus doloremque voluptas illum ratione et minima eum. Earum omnis fugit architecto et ea error aut quae. Ea delectus recusandae sit quia porro debitis dolores expedita.",
    email: "minima",
  },
  {
    id: "ut",
    firstName:
      "Non et quibusdam vero molestias facilis vero. Laudantium soluta libero reiciendis optio sequi earum facere totam blanditiis. Et ut quaerat dolores. Quia minima minus deleniti. Et sapiente accusantium fuga.\n \rAccusantium aut rerum corrupti perspiciatis ipsum ipsam aut eaque sint. Deserunt tempora porro saepe quasi alias. Maxime rem veniam eveniet sit eum.\n \rSed aut aliquid perferendis aut aut nostrum non tempora. Rerum dolore iure. Corrupti sunt dolorum tempore fuga adipisci et maiores. Qui distinctio placeat suscipit sequi tenetur nam. Quidem consequuntur distinctio. Asperiores sequi voluptatem et quia qui qui sed voluptas.",
    lastName: "Explicabo voluptatem ab in est sequi ut incidunt corporis.",
    address:
      "Totam ullam quos autem est voluptas necessitatibus. Voluptates dicta perspiciatis. Voluptatem eius ratione dolor occaecati error. Ut suscipit et qui vel eius omnis. Exercitationem iure labore et eveniet deleniti ut.\n \rDolores facere quia asperiores dolor non. Omnis quod porro est nemo ad exercitationem. Et quo aliquid. Molestias nemo occaecati et aliquam eius esse laborum consequatur.\n \rMolestias qui possimus unde et suscipit. Voluptas et aut sit saepe. Illo necessitatibus sint quam saepe perferendis. Commodi voluptas excepturi blanditiis possimus dolor et sint. Inventore quia non est maxime et facilis. Sunt non architecto.",
    dni: "Non tempora consequatur. Sed voluptates recusandae et exercitationem.",
    birthdate: "et dolorem ab",
    citizenship:
      "Aliquam explicabo eveniet illo ut rerum et corrupti occaecati. Omnis natus facilis deserunt qui vitae. Adipisci est odio voluptatibus rerum occaecati quia est. Dolor dignissimos nam. Et sed repudiandae dolor aliquid dolores totam perferendis.",
    phoneNumber:
      "Non quas eum sapiente odio cum est quibusdam reiciendis provident. Et placeat blanditiis non. Mollitia numquam ipsum facere eligendi. Consequatur ullam unde modi. Dignissimos adipisci et adipisci.",
    email:
      "Ea dolores ducimus quaerat numquam fugiat. Nihil nihil quasi quisquam. Beatae id id qui minima repellendus cum distinctio libero laudantium. Est occaecati sequi ut. Dolores laborum non ea aut quidem eius iure velit. Dolorem aperiam iure quibusdam.\n \rEum ducimus eos distinctio consequatur. Dolores quis rem molestiae et molestiae voluptatum incidunt. Ea odit velit soluta.\n \rAspernatur porro est. Harum cupiditate illum ab. Blanditiis non mollitia rem ea dolores veritatis reprehenderit accusantium. Non et voluptatem rerum quis optio quia sint enim. Impedit pariatur facere fugit ex qui et.",
  },
  {
    id: "fugiat non harum",
    firstName:
      "Velit quia ipsam neque et eius voluptate facilis vitae et. Dolore iusto minus voluptate doloribus quia neque reprehenderit. Et dolorem at tempore animi. Est molestiae accusamus voluptas tenetur et. Veniam mollitia suscipit in omnis ea modi qui non omnis. Maiores nam dignissimos rerum repellat reiciendis esse delectus aspernatur.",
    lastName:
      "Nihil quisquam quo adipisci dignissimos a rem libero. Repellat atque saepe laudantium iusto non sed. Nisi consequatur id dicta sunt id non quaerat dolores. Voluptatibus nulla aut quis quia. Nesciunt architecto voluptatibus. Quia ea labore possimus dolor dignissimos.\n \rEst molestiae nihil ab repudiandae doloremque quas at deleniti. Harum culpa fugiat nam dolores voluptates assumenda eum alias. Quae ad cum et eaque qui omnis veritatis distinctio. Deleniti ullam voluptatem rerum dolor natus odio et qui vel.\n \rPerspiciatis saepe laudantium dolor. Qui ipsam soluta maxime quia. Aspernatur qui non consequatur dolorum. Praesentium nemo aut.",
    address:
      "Labore amet dolorem ducimus est doloribus dolorum eos ut sunt. Libero et eum ex labore fugit. Sapiente similique necessitatibus et voluptatum at quisquam non doloribus in. Reprehenderit libero deleniti eius quaerat incidunt. Consequatur non debitis magnam et praesentium quia. Reprehenderit deserunt quia ullam pariatur soluta in.\n \rSunt inventore quaerat id. Explicabo quisquam animi aliquam. Non enim qui. Illum qui enim neque sequi cumque accusantium. Sit veritatis enim neque aspernatur.\n \rEa delectus minima autem. Non voluptatibus omnis voluptates. Nemo est exercitationem atque velit quod facilis.",
    dni: "Id ipsam laudantium quaerat facere.",
    birthdate:
      "Quasi esse in ab maxime. Repellat voluptatibus animi numquam rem blanditiis autem tempore qui sequi. Distinctio vero dicta minima beatae. Ut est ea omnis rerum consequuntur sint voluptas cumque magni.\n \rIpsa ipsum veritatis debitis dolores rerum alias tenetur. Est itaque error eos. Et recusandae quia qui. Aliquam iure nobis dolores corrupti excepturi quas aut. Possimus voluptatem aut dignissimos. Maiores asperiores saepe ipsam consectetur possimus inventore.\n \rLaudantium iste non voluptatem voluptatibus placeat consequatur et voluptas. Accusantium ipsam at molestiae. Exercitationem tenetur blanditiis nesciunt. Modi ab nihil eveniet ut nam sed qui eius. Est odit perspiciatis amet nulla et odit blanditiis temporibus molestiae. Officiis debitis et at rerum doloribus.",
    citizenship:
      "Autem nihil vel quo qui delectus est quo dolor quae. Ex repudiandae cumque voluptatibus quibusdam dolores sapiente consectetur numquam. Enim velit minima ut delectus quaerat ut qui qui. Nesciunt perferendis iste. Et nulla sapiente eveniet nisi.\n \rEt et facilis illo sed quos qui. Placeat et libero aspernatur quod ratione. Omnis eveniet accusamus hic aut inventore quo.\n \rUt facilis magnam sunt culpa iure. Totam voluptate eveniet facere. Fugit corporis magnam. Praesentium repellat repellat cumque tenetur et accusamus. Nisi aut aliquid eius sapiente aliquam.",
    phoneNumber:
      "A necessitatibus nemo.\nIllo praesentium qui.\nFuga doloribus impedit nam.",
    email: "id",
  },
  {
    id: "at natus minima",
    firstName:
      "Unde tenetur sint assumenda nulla consequatur ipsum sed consequuntur.",
    lastName:
      "Repudiandae explicabo deserunt atque consequatur voluptatem ducimus. Quis est quaerat voluptate dicta dolor libero nam labore maiores.",
    address: "molestiae est est",
    dni: "Tempore beatae nisi voluptas dolorum laudantium. Dolores similique harum non corporis est. Culpa iusto aut praesentium fuga id similique. Officiis aliquam autem cumque et consectetur corrupti.",
    birthdate:
      "Temporibus autem ut dicta odit illo nemo dignissimos quod. Porro delectus consequatur fugit id. Quaerat qui unde. Et provident explicabo perspiciatis rerum.",
    citizenship:
      "Et dolorem quasi adipisci quo. Dolorum aut possimus aut vitae consequatur molestias ut iste. Consequatur itaque nulla quia ducimus beatae asperiores rerum omnis quia.",
    phoneNumber: "cum quis qui",
    email:
      "Enim dignissimos cumque eos dolorum veniam soluta excepturi enim quia. Cumque quo omnis illo et non. Quasi veniam corrupti dolores corrupti id sunt. Itaque ut deserunt eos velit.\n \rDicta totam sit illum enim provident eius eum expedita libero. Nisi dolore sed enim dicta dicta quidem consequatur quidem reprehenderit. Autem accusantium eius ut minima. Maiores qui sequi magnam qui alias fugiat officiis est modi.\n \rEt saepe vel ut quia incidunt tenetur excepturi. Dolor exercitationem aut cupiditate. Illo eveniet magni. Velit voluptas est placeat laboriosam et.",
  },
  {
    id: "molestiae",
    firstName:
      "Beatae minus et inventore libero sunt. Unde saepe sint dolorem excepturi quia at nemo voluptatem quo.",
    lastName: "Et aliquam ipsa consequatur ut sed nam pariatur exercitationem.",
    address: "Exercitationem voluptas quos quasi.",
    dni: "Ut beatae rerum similique voluptatum. Sed odit ducimus. Dolores fugiat et iure. Est rerum est voluptatum recusandae aut eaque dolorum.\n \rQuam est molestias. Consectetur aut ad. Id sunt at. Eos voluptatum quis dolorem voluptatem eum sit. Aut natus qui illum non cum modi et eligendi commodi.\n \rQuia velit ea ratione sapiente et ut quod quam ipsa. Non odio temporibus numquam provident eum. Repellat eos officia accusantium. Culpa aperiam ut ea tempora sequi dolor assumenda.",
    birthdate: "Qui autem nostrum eius in. Earum ex provident.",
    citizenship:
      "Eligendi porro autem provident quibusdam consequatur commodi. Reiciendis ducimus ex aut perferendis velit nostrum. In suscipit voluptatibus. Quia earum quasi tenetur aperiam magni quibusdam delectus. Quo et fugit. Expedita libero consectetur debitis et saepe excepturi neque quas.",
    phoneNumber:
      "Aut consequatur dolore quam hic quo saepe est et facilis. Necessitatibus et ut nam asperiores temporibus dignissimos labore. Ipsum sint accusamus. Magni quasi consequatur quod qui in quisquam. Sit odit fugiat tenetur sed aut reprehenderit eos.",
    email:
      "Est nihil dolor libero velit quia distinctio qui magni consequatur. Neque mollitia ut dolorem voluptas autem. Est dolorem neque. Animi tempora beatae voluptate totam. Magni perspiciatis quia earum voluptas autem deleniti.\n \rAmet voluptate ducimus impedit. Qui quam beatae pariatur accusantium saepe. Reiciendis quia expedita omnis corporis.\n \rAperiam quod facilis sit in nam. Pariatur dignissimos ut doloremque. Atque sunt ipsam neque facilis quia nesciunt. Et molestias omnis quam. Aut pariatur error nam iure.",
  },
  {
    id: "Nulla qui cupiditate minima soluta. Voluptatem culpa recusandae. Veniam reiciendis soluta sed atque.\n \rId adipisci aliquam qui vel et porro in ad. Fugiat beatae illo blanditiis vel reiciendis. Eos sit mollitia nulla mollitia et.\n \rConsequatur incidunt hic sequi quo laborum ea dolorum pariatur libero. Adipisci dolor laudantium nam a. Eos architecto sit autem eos ea ut iste recusandae nobis. Ipsa voluptatibus ut ipsa pariatur veritatis magnam sapiente et accusantium. Adipisci est amet ex.",
    firstName:
      "Nihil numquam voluptatem iusto ut non quae blanditiis. Cum facere quia. Recusandae omnis illum est tempora ut provident cumque labore. Earum doloribus et repudiandae.\n \rNon dolor omnis minima numquam dolorem doloremque nisi. Voluptatem asperiores rem dolorem laudantium sit eos amet cum ut. Repellat fugit laboriosam autem aliquam.\n \rQuo dolores qui est cupiditate quos excepturi qui enim eaque. Corrupti repellendus quis sed qui praesentium exercitationem sunt vel. Possimus itaque aut sit sint.",
    lastName:
      "Omnis autem maxime expedita facilis a fugiat sapiente harum eius. Vero pariatur quasi possimus animi dolorem. Eligendi ut voluptate dolorum quisquam magnam sit et voluptatem voluptatibus. Inventore et delectus similique similique nisi tempora sit tempore. Sunt rerum tempore saepe ab impedit quas veritatis molestias officiis.\n \rDolorem eos sit. Cumque doloribus ipsum natus ut inventore fugiat quia maiores quia. Velit est placeat animi qui molestiae enim aut. Quo tempore quam sed. Sed rerum rerum dolorem.\n \rEst dolorem voluptas non impedit. Consequatur eum dicta temporibus consequatur quasi ipsum placeat. Similique qui consequatur illo voluptate animi maiores. Pariatur aut numquam occaecati ea aut accusamus.",
    address:
      "Consequuntur recusandae iusto quia cupiditate est dolor. Earum voluptas occaecati corporis deleniti beatae. Nihil vero praesentium quos quos in ad pariatur hic. Pariatur quia unde. Nesciunt enim explicabo ad ut quos consequuntur. Repellat nostrum sunt.\n \rArchitecto libero est delectus harum voluptatem. Et perspiciatis aut mollitia praesentium natus ab sapiente nesciunt. Ab sint iure omnis quisquam.\n \rOdit eum harum quidem voluptatibus. Harum minima vitae qui temporibus explicabo hic est molestias. Omnis laboriosam quas. Omnis nemo animi. Quos eum alias.",
    dni: "Exercitationem qui consequatur enim non aliquid. Voluptate suscipit occaecati aliquam. Et suscipit quidem voluptatem aut ea nihil culpa enim.",
    birthdate:
      "Ipsam quo pariatur qui alias quia autem. Quae sequi facere nemo et perferendis corporis. At earum suscipit nulla. Autem officia ut fugiat magni est cumque harum sunt qui. Unde nesciunt consequatur numquam et voluptate animi quis libero. Explicabo officia non.\n \rQuasi vel commodi inventore doloremque suscipit. Aliquam veniam odio ab sit eligendi eius nisi corrupti molestias. Qui provident maiores quo eaque repudiandae. Et qui molestiae dolorum rem. Voluptatem consectetur blanditiis.\n \rRepellat quia nobis ipsam et tenetur inventore molestias. Magni et excepturi in ad et sed dolorem dolor eius. Molestiae minus dolorum natus iste qui molestiae sed.",
    citizenship: "suscipit fugiat recusandae",
    phoneNumber:
      "Repudiandae ratione sit sit accusamus magni et perferendis at libero. Deserunt et dolores et illo voluptates commodi aperiam dolores. Voluptatem vero reiciendis ut ullam sint minima. Repellat velit ab iusto ratione ipsum et.\n \rOfficia ut ut non cumque tempora recusandae nesciunt enim perspiciatis. Corporis quasi similique. Quis incidunt et ipsum ullam velit. Minus assumenda enim.\n \rAut optio voluptatibus facere nesciunt sint laudantium debitis itaque. Asperiores ab ullam. Cumque et quia impedit autem mollitia omnis.",
    email: "aspernatur",
  },
  {
    id: "Eum aliquid quia cumque nulla. Qui eligendi dolor. Aliquam quia velit totam aut. Qui et eos et autem illo. Aperiam sit nam. Id architecto animi est.\n \rDolor ex velit eius qui. Dolores ab velit nam. Error aut libero. Reiciendis laboriosam accusamus magnam qui.\n \rNesciunt explicabo dolorem voluptatem. Facilis vel qui non provident qui aut quis vel blanditiis. Natus totam placeat error a. Incidunt autem velit. Ab occaecati nesciunt harum sit laudantium dolorum.",
    firstName:
      "Vero est asperiores ratione earum non quas.\nEt voluptatibus aperiam voluptatum eligendi commodi.\nVel quia dolorem esse aut sint.\nPlaceat omnis omnis alias odio assumenda qui fugit.\nSint et veritatis quas aut enim ut.",
    lastName: "Iste qui recusandae.",
    address:
      "Amet dolorum et consectetur laboriosam ducimus sapiente non ipsa sed.",
    dni: "nihil",
    birthdate:
      "Est error consequuntur. Ut temporibus omnis quae ea sit vitae illo. Eum quis doloribus magni atque qui. Et placeat voluptate. Saepe occaecati quos dolorem qui.\n \rAsperiores ut voluptatum enim qui minus. Odio distinctio recusandae soluta laborum quae perspiciatis est laudantium. In et enim necessitatibus a magnam non.\n \rQuasi aut quia necessitatibus reiciendis nihil occaecati fugiat. Iusto minima beatae esse quas et et voluptate. Perspiciatis ea possimus et harum doloribus.",
    citizenship:
      "Ea perferendis voluptatem ea sunt distinctio. Est enim et incidunt et ipsam illo. Distinctio provident ut sapiente quos aut earum labore. Reiciendis est asperiores sunt maxime velit pariatur voluptas quam perferendis.",
    phoneNumber:
      "Non porro quia ipsam aut quos laborum ipsam. Voluptas neque dolor sequi aut voluptatem eos ut. Et sed quas voluptatum. Illo tempore id dignissimos beatae facilis in sapiente quas. Sit et est fugit nihil natus dolorum maiores et.",
    email:
      "Aut exercitationem eius.\nSunt facilis et quis nostrum.\nUt fuga et.",
  },
];
